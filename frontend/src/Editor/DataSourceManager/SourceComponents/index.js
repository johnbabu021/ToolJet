import React from 'react'

import DynamicForm from '@/_components/DynamicForm';
import AirtableSchema from './Airtable.schema.json'
import RestapiSchema from './Restapi.schema.json'
import GraphqlSchema from './Graphql.schema.json'
import StripeSchema from './Stripe.schema.json'
import { Elasticsearch } from './Elasticsearch';
import { Redis } from './Redis';
import { Postgresql } from './Postgresql';
import { Mysql } from './Mysql';
// import { Stripe } from './Stripe';
import { Firestore } from './Firestore';
// import { Restapi } from './Restapi';
import { Googlesheets } from './Googlesheets';
import { Slack } from './Slack';
import { Mongodb } from './Mongodb';
import { Dynamodb } from './Dynamodb';
// import { Airtable } from './Airtable';
// import { Graphql } from './Graphql';
import { Mssql } from './Mssql';

const Airtable = ({...rest}) => <DynamicForm schema={AirtableSchema} {...rest} />
const Restapi = ({...rest}) => <DynamicForm schema={RestapiSchema} {...rest} />
const Graphql = ({...rest}) => <DynamicForm schema={GraphqlSchema} {...rest} />
const Stripe = ({...rest}) => <DynamicForm schema={StripeSchema} {...rest} />
export const SourceComponents = {
    Elasticsearch,
    Redis,
    Postgresql,
    Mysql,
    Stripe,
    Firestore,
    Restapi,
    Googlesheets,
    Slack,
    Mongodb,
    Dynamodb,
    Airtable,
    Graphql,
    Mssql
};
