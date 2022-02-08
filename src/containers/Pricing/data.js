const SUBS_WORK = `<p>
Programiz PRO is available as a monthly or annual subscription. The subscription allows you to access the following features:</p>
<ul>
<li>With the monthly subscription, you automatically get billed every month.</li>
<li>With the annual subscription, you automatically get billed every year.</li>
</ul>`;

const CANCEL_SUBS = `<p>Since our subscriptions are handled by Paddle, visit the <a href="https://paddle.com/" target="_blank">paddle website</a> and cancel it manually.</p>`;

const DELETE_ACCOUNT = `<p>Yes. When you delete your account, all your data and subscription are deleted from our server.</p>`;

const OFFER_REFUND = `<p>Yes. Programiz PRO offers a refund within 7 days, from our side, after you buy a subscription and is handled by Paddle, <a href="https://help.paddle.com/hc/en-us/articles/115002224789-Refund-Policy" target="_blank">link here</a>.</p>`;

const REQUEST_REFUND = `<p>To request a refund, please write us a mail at <a href="mailto:feedback@programiz.pro" target="_blank">feedback@programiz.pro</a>.</p>`;

const TRANSFER = `<p>No, you cannot transfer the subscription to another account. Rather, you can cancel the subscription from the old account and subscribe through the new account.</p>`;

const VALIDITY = `<p>Programiz PRO offers two subscription plans. Either you can subscribe monthly or yearly.</p>`;

export const List = {
  pro: [
    {
      id: 1,
      title: "All Courses Unlocked",
    },
    {
      id: 2,
      title: "Interactive Challenges",
    },
    {
      id: 3,
      title: "Get Certified",
    },
    {
      id: 4,
      title: "Community Discord Access",
    },
  ],
  enterprise: [
    {
      id: 1,
      title: "All Courses Unlocked",
    },
    {
      id: 2,
      title: "Interactive Challenges",
    },
    {
      id: 3,
      title: "Get Certified",
    },
    {
      id: 4,
      title: "Community Discord Access",
    },
  ],
  faq: [
    {
      id: 1,
      title: "How does the subscription work?",
      desc: SUBS_WORK,
    },
    {
      id: 2,
      title: "How can I cancel the subscription?",
      desc: CANCEL_SUBS,
    },
    {
      id: 3,
      title: "Does my subscription get canceled if I delete my account?",
      desc: DELETE_ACCOUNT,
    },
    {
      id: 4,
      title: "Does Programiz PRO offer a refund?",
      desc: OFFER_REFUND,
    },
    {
      id: 5,
      title: "What is the process for a refund?",
      desc: REQUEST_REFUND,
    },
    {
      id: 6,
      title: "Can I transfer the subscription to a different account?",
      desc: TRANSFER,
    },
    {
      id: 7,
      title: "What is the validity of my subscription?",
      desc: VALIDITY,
    },
  ],
};
