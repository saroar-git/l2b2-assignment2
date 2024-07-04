# Product Management Server

## Introduction

This project is an advanced E-commerce API designed to handle the complexities of modern online shopping platforms. Built with Express.js and TypeScript, this API integrates MongoDB using Mongoose for robust data management. It ensures data integrity and adherence to data schemas through validation using Zod. The API supports comprehensive CRUD operations for both products and orders, providing a solid foundation for any e-commerce application.

## Technology

- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Prettier](https://eslint.org/)
- [Eslint](https://eslint.org/)
- [Zod](https://zod.dev/)

## Features :

### Product Management

- Create a New Product
- Retrieve All Products
- Retrieve Specific Product by ID
- Update Product Information
- Delete a Product
- Search for Products

### Order Management

- Create a New Order
- Retrieve All Orders
- Retrieve Orders by User Email

## Quick Start

Follow these steps to set up the project locally on your device.

### Required :

Make sure you have the following installed on your machine:

- [**Node.js**](https://nodejs.org/en) installed (v15 or higher recommended)
- [**MongoDB**](https://www.mongodb.com/) installed
- [**VSCode**](https://code.visualstudio.com/) code editor
- [**TypeScript**](https://www.typescriptlang.org/) installed
- [**pnpm**](https://pnpm.io/) or [**npm**](https://www.npmjs.com/) installed

### Clone the Repository and paste it into the Prompt window as

```bash
git clone https://github.com/saroar-git/product-management
```

### Go to 'product-management' folder

### Install Dependencies

```bash
pnpm install
```

<br/> ( if you can't run it then install and setup pnpm globally)

### Configure Environment Variables

Create a .env file in the root of the project and add the following environment variables:

```bash
PORT=5000
DB_URL="setup your MongoDB address"
```

### Compile TypeScript inti JavaScript

```bash
pnpm build
```

### Start the Application

```bash
pnpm start
```

## Contact

If you have any questions or need further assistance, please contact info.saroarjahan@gmail.com.

---
