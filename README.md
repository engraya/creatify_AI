## <a name="tech-stack">Creatify_AI</a>

Creatify_AI is an AI-powered web application designed to generate and customize social media content and descriptions for platforms like YouTube, Facebook, Twitter, Instagram, LinkedIn, and TikTok. With the power of Google Gemini API, users can generate highly relevant, catchy, and engaging content, tailored for their brand or audience.

The application also allows for customization, sharing, and direct exporting of generated content. Built using cutting-edge technologies like Next.js, TypeScript, Tailwind CSS, ShadCN, PostgreSQL, Clerk, Stripe, and Google Gemini API, Creatify_AI aims to simplify and accelerate social media content creation.


## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Setuo](#features)
4. 🤸 [Usage](#quick-start)
5. 🕸️ [Stripe Integration](#snippets)
6. 🔗 [Google Gemini API](#links)
7. 🚀 [Deployment](#more)
8. 👉 [Contributing](#more)
9. 👉 [License](#more)

## <a name="introduction">🤖 Introduction</a>

Creatify_AI is an innovative AI-powered platform designed to simplify the process of creating engaging social media content across multiple platforms. Whether you're a content creator, marketer, or business owner, Creatify_AI leverages cutting-edge artificial intelligence to help you generate high-quality posts, captions, and descriptions for platforms like YouTube, Facebook, Instagram, Twitter, LinkedIn, and TikTok.

By integrating the Google Gemini API, Creatify_AI enables users to generate customized, context-aware content based on trending topics, user input, and platform-specific requirements. The app also provides intuitive tools for personalizing and refining content, making it easy to align with your brand voice and goals.

With a clean and responsive design built using Next.js, Tailwind CSS, and ShadCN, Clerk, Creatify_AI offers a seamless user experience across desktop and mobile devices. You can also manage your subscription using Stripe for a smooth, secure payment process.

Whether you're creating posts for a new product launch, a viral campaign, or daily engagement, Creatify_AI helps you save time and effort by automating content generation while maintaining creativity and authenticity.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js - React framework for server-side rendering, static site generation, and routing.
- TypeScript - A superset of JavaScript that adds static typing.
- Clerk - A superset of Authentication System tooling.
- Tailwind CSS - Utility-first CSS framework for rapidly building custom designs.
- ShadCN - A library for building high-quality user interfaces with React and Tailwind CSS.
- PostgreSQL - Relational database for storing user data and content.
- Stripe - Payment processing platform for handling user subscriptions and transactions.
- Google Gemini API - Used for AI-powered content generation.

## <a name="features">🔋 Features</a>

👉 **User Authentication with Clerk**: Implement signup, login, and logout functionality using Clerk's authentication system.

👉 **AI-powered Content Generation**: Generate text-based content for social media platforms like YouTube, Instagram, Twitter, and more.

👉 **Customizable Templates**: Choose from a variety of pre-built templates to personalize the content.

👉 **Cross-Platform Compatibility**: Supports multiple social media platforms including YouTube, Facebook, Twitter, Instagram, LinkedIn, and TikTok.

👉 **Content Export & Sharing**: Users can easily share their uploaded files with others, enabling collaboration and easy access to important content, Share and export the generated content directly to your preferred platforms.

👉 **Dashboard**: Gain insights at a glance with a dynamic dashboard that showcases generated contents and consumed credits, recent generations, and a summary of generated contents grouped by categories.

👉 **Global Search**: Users can quickly find files and shared content across the platform with a robust global search feature.

👉 **Sorting Options**: Organize files efficiently by sorting them by date, name, or size, making file management a breeze.

👉 **Modern Responsive Design**: A fresh and minimalist UI that emphasizes usability, ensuring a clean aesthetic across all devices.

👉 **Stripe Integration**: Handle user subscriptions and payments for premium features.

and many more, including the latest **React**, **Next.js** and **Clerk** features alongside code architecture and
reusability

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- PostgreSQL (if running locally)
- Stripe Account for payment integration
- Google Gemini API Key for AI content generation

**Cloning the Repository**

```bash
git clone https://github.com/engraya/creatify_AI.git
cd creatify_AI
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

- Set up the database:
    If you're running PostgreSQL locally, create a new database and run the migrations.
    You can use an ORM like Prisma or TypeORM to manage database schema and migrations.
- Set up your .env file with the necessary environment variables (see below).

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
NEXT_PUBLIC_APP_URL=
NEXT_PUBLIC_GEMINI_API_KEY=
DATABASE_URL=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=
```


**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

- Creating Content:
  After logging in, you can start generating social media content by selecting a platform and using the AI-powered content generation tool.
  Customize the content using pre-set templates or start from scratch.
  Once you're happy with the generated content, you can export it to your chosen social media platform or download it.
- Stripe Subscription:
  Users can subscribe to premium features by going through Stripe's checkout process.
  Make sure to use the correct Stripe secret and public keys in the .env.local file for payments.


**Stripe Integration**
Creatify_AI uses Stripe for handling payments for premium features.

- Configure Stripe:

Set up your Stripe account and configure your payment plans in the Stripe dashboard.
Add your Stripe keys to the .env.local file as mentioned above.

- Subscription Handling:

Users can subscribe to premium content generation features, which can be handled via Stripe checkout.
Webhooks from Stripe will be used to track subscription changes (like successful payments, cancellations, etc.).


**Google Gemini API**
- Creatify_AI uses the Google Gemini API to generate AI-powered content.

Get an API Key:
Head to the Google Gemini API documentation and obtain an API key.
API Integration:
The API key needs to be added to the .env.local file as GEMINI_API_KEY.
The app will send requests to the Gemini API to generate content based on the user's input.



**Deployment**
You can deploy Creatify_AI on platforms like Vercel or Heroku.

Vercel Deployment
Push the project to a GitHub repository.
Connect your GitHub repo to Vercel.
Set up the environment variables in Vercel's dashboard for production.
Deploy the app to Vercel.
Vercel will automatically build and deploy the app whenever changes are pushed to your main branch.


**Contributing**
We welcome contributions to Creatify_AI! If you'd like to contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/your-feature).
Open a pull request.
