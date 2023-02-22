import express from "express";
import path from 'path';
import ApiRouter from './api-routes/index.js';
import dotenv from 'dotenv';
import { postgraphile, makePluginHook }  from "postgraphile";
import PgSimplifyInflectorPlugin from "@graphile-contrib/pg-simplify-inflector";
import ConnectionFilterPlugin from "postgraphile-plugin-connection-filter";
import PgPubsub from "@graphile/pg-pubsub";

const app = express();
const pluginHook = makePluginHook([PgPubsub]);
const __dirname = path.dirname("/");

console.log(__dirname)
dotenv.config({ path: './.env' });

app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(express.json({limit: '50mb', extended: true}))
app.use("/api", ApiRouter);
app.use("/", express.static(path.join(__dirname, "./dist")));
app.use(express.static('./dist'));

// POSTGRAPHILE - UNCOMMENT IF YOU INTEND TO USE POSTGRES & WOULD LIKE TO USE GRAPHQL.
// app.use(
//   postgraphile(
//     process.env.NODE_ENV === "development" ? process.env.DATABASE_URL : process.env.POSTGRAPHILE,
//     [], // ADD DB SCHEMAS
//     {
//       appendPlugins: [
//         PgSimplifyInflectorPlugin
//         , ConnectionFilterPlugin
//       ],
//       pluginHook,
//       ownerConnectionString: `${process.env.DATABASE_URL}`,
//       watchPg: true,
//       enhanceGraphiql: true,
//       ignoreRBAC: false, // Role Based Access Control (RBAC)
//       extendedErrors: ["errcode", "detail", "hint"],
//       graphiql: process.env.NODE_ENV === "development" ? true : false,
//       subscriptions: true,
//       simpleSubscriptions: true,
//       live:true,
//       retryOnInitFail: true,
//       rejectUnauthorized: false,
//     }
//   )
// );

app.get('*', function (req, res) {
    res.sendFile(path.join( `${__dirname}dist/index.html`));
 });

app.listen(process.env.PORT || 4000);
