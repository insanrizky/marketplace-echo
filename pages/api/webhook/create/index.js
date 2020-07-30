// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import HttpStatus from "http-status-codes";
import OAuth from "oauth";
import { OAUTH } from "../../../../src/constants";

const fetchHeaders = (headers) => {
  const oauthHeaders = {};
  headers.authorization
    .replace("OAuth", "")
    .replace(new RegExp(" ", "g"), "")
    .replace(new RegExp('"', "g"), "")
    .split(",")
    .forEach((d) => {
      const split = d.split("=");
      oauthHeaders[split[0]] = split[1];
    });
  return oauthHeaders;
};

export default async (req, res) => {
  const { method, url, headers, query, body } = req;
  const data = { method, url, headers, query, body };
  console.log(data);

  const oauthDetails = fetchHeaders(headers);
  const oauth = new OAuth.OAuth(
    '',
    '',
    oauthDetails.oauth_consumer_key,
    OAUTH.consumer_secret,
    oauthDetails.oauth_version,
    null,
    oauthDetails.oauth_signature_method
  );

  oauth.getOAuthRequestToken((err, data, token, query) => {
    console.log(err);
    console.log(data);
    console.log(token);
    console.log(query);
  })
  // oauth.get(
  //   query.url,
  //   oauthDetails.oauth_consumer_key,
  //   OAUTH.consumer_secret,
  //   (e, data, res) => {
  //     if (e) console.error(e);
  //     console.log(data);
  //     console.log(res);
  //     console.log(require("util").inspect(data));
  //     done();
  //   }
  // );

  res.status(HttpStatus.OK).json({
    success: true,
    accountIdentifier: 1,
    errorCode: "ACCOUNT_NOT_FOUND",
    message: "The account TEST123 could not be found.",
  });
};
