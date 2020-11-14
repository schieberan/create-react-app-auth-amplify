import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import {
  Card, CardImg, CardText, CardBody, CardDeck,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import MareList from './components/MareList'
import MareCreate from './components/MareCreate'
import MareDetail from './components/MareDetail'


const style = { width: "18rem" };

const cache = new InMemoryCache({
    dataIdFromObject: object => object.id || null
  });
  
  const client = new ApolloClient({
    link: createHttpLink({ uri: "/graphql" }),
    cache
  });

class Mares extends React.Component {
    render() {
        return (
          <>
            <div className="content">
              <CardDeck>
                  <Card style={style}>
                      <div>
                        <ApolloProvider client={client}>
                        <HashRouter >
                            <Route exact path="/" component={MareList} />
                            <Route exact path="/mares/new" component={MareCreate} />
                            <Route path="/mares/:id" component={MareDetail} />
                        </HashRouter>
                      </ApolloProvider>
                    </div>
                  </Card>
                </CardDeck>
            </div>
        </>
        )
        };
    }

export default Mares;
