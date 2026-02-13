# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## EmailJS Setup

This portfolio uses [EmailJS](https://www.emailjs.com/) for the contact form functionality. You need to set up two templates in your EmailJS dashboard:

### Required GitHub Secrets

Add these secrets to your GitHub repository (Settings > Secrets and variables > Actions):

- `REACT_APP_EMAILJS_SERVICE_ID` - Your EmailJS service ID
- `REACT_APP_EMAILJS_PUBLIC_KEY` - Your EmailJS public key
- `REACT_APP_EMAILJS_TEMPLATE_ID` - Template ID for contact form (sends email to you)
- `REACT_APP_EMAILJS_AUTOREPLY_TEMPLATE_ID` - Template ID for auto-reply (sends confirmation to user)

### Template 1: Contact Form (You receive the email)

Create a new template in EmailJS with these variables:

```
Subject: New Contact Form Submission: {{subject}}

You have received a new message from your portfolio website.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

**Template Settings:**
- To Email: Your email address (faisalrehman30003@gmail.com)
- From Name: Portfolio Contact Form
- Reply To: {{from_email}}

### Template 2: Auto-Reply (User receives confirmation)

Create a second template in EmailJS with these variables:

```
Subject: Thank you for contacting me, {{from_name}}!

Hi {{from_name}},

Thank you for reaching out to me through my portfolio website. I have received your message and will get back to you as soon as possible.

Here's a copy of your message:
Subject: {{subject}}
Message: {{message}}

Best regards,
Faisal Ur Rehman

---
This is an automated response. Please do not reply to this email.
```

**Template Settings:**
- To Email: {{from_email}}
- From Name: Faisal Ur Rehman
- Reply To: faisalrehman30003@gmail.com

### Local Development

For local development, create a `.env.local` file (already in .gitignore):

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_contact_template_id
REACT_APP_EMAILJS_AUTOREPLY_TEMPLATE_ID=your_autoreply_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
