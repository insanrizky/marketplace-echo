// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Joi from 'joi';
import get from 'lodash.get';
import HttpStatus from 'http-status-codes';

export default async (req, res) => {
  const schema = Joi.object({
    kwuid: Joi.number().required(),
    credit: Joi.number().required(),
    order_id: Joi.number().required(),
  });

  let input = {
    kwuid: null,
    credit: null,
    order_id: null,
  };
  try {
    input = await schema.validateAsync(req.query);
  } catch (err) {
    const message = get(err, "details[0].message");
    res.status(HttpStatus.BAD_REQUEST).send({
      error: true,
      message,
    });
  }

  const { kwuid, credit, order_id } = input;

  const data = {
    event: {
      type: "SUBSCRIPTION_ORDER",
      marketplace: {
        baseUrl: "https://marketplace.kw.com",
        partner: "KELLERWILLIAMS",
      },
      creator: {
        address: {
          city: "Manchester",
          country: "US",
          firstName: "Cedric",
          fullName: "Cedric Vanterpool",
          lastName: "Vanterpool",
          phone: "2037801724",
          state: "CT",
          street1: "466 Middle Turnpike W Apt 28",
          zip: "06040",
        },
        email: "cedric@kw.com",
        firstName: "Cedric",
        language: "en",
        lastName: "Vanterpool",
        locale: "en-US",
        openId: "https://marketplace.kw.com/openid/id/{uuid1}",
        uuid: "20fd3636-7d6f-44cf-9d28-25fb2a080aab",
      },
      payload: {
        company: {
          country: "US",
          name: "Cedric",
          uuid: "a5269428-887b-4048-a599-29ff2959e8a9",
        },
        configuration: {
          entry: {
            key: "KWID",
            value: kwuid,
          },
        },
        order: {
          id: order_id,
          editionCode: `${credit} Credits`,
          pricingDuration: "MONTHLY",
          freeTrial: {
            active: true,
          },
          customAttributes: {},
        },
      },
    },
  };

  res.status(HttpStatus.OK).send(data);
};
