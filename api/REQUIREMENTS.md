# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints

### `/user` endpoint
this endpoint enables you to apply one of the following methods:
|   Operation   |         Method         |       JWT       | arguments |
| :-----------: | :--------------------- | :-------------: | :-------: |
| GET ALL       | `GET /api/user`        | [require token] |           |
| GET ONE       | `GET /api/user/:id`    | [require token] | [arg: id] |
| CREATE ONE    | `POST /api/user`       |                 |           |
| UPDATE ONE    | `PUT /api/user`        | [require token] |           |
| DELETE ONE    | `DELETE /api/user/:id` | [require token] | [arg: id] |

### `/product` endpoint
this endpoint enables you to apply one of the following methods:
|   Operation   | Method                    |       JWT       | arguments |
| :-----------: | :------------------------ | :-------------: | :-------: |
| GET ALL       | `GET /api/product`        |                 |           |
| GET ONE       | `GET /api/product/:id`    |                 | [arg: id] |
| CREATE ONE    | `POST /api/product`       | [require token] |           |
| UPDATE ONE    | `PUT /api/product`        | [require token] |           |
| DELETE ONE    | `DELETE /api/product/:id` | [require token] | [arg: id] |

### `/order` endpoint
this endpoint enables you to apply one of the following methods:
|   Operation   | Method                  |       JWT       | arguments |
| :-----------: | :---------------------- | :-------------: | :-------: |
| GET ALL       | `GET /api/order`        |                 |           |
| GET ONE       | `GET /api/order/:id`    |                 | [arg: id] |
| CREATE ONE    | `POST /api/order`       | [require token] |           |
| UPDATE ONE    | `PUT /api/order`        | [require token] |           |
| DELETE ONE    | `DELETE /api/order/:id` | [require token] | [arg: id] |
| GET BY USER A | `GET /api/order/u/:id`  | [require token] | [arg: id] |
| GET BY USER C | `GET /api/order/uc/:id` | [require token] | [arg: id] |

The last two methods enable user to get specific active/complete order from database depending on its status (OrderStatus=1: active, OrderStatus=2: complete)

**now, all CRUD methods are available by API**