import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Footer from "./components/Footer";
import Explore from "./pages/Explore";
import "./App.scss";

const blogs = [
  {
    id: "post-1",
    title: "Image Recognition",
    description:
      "Exploring the fascinating world of image recognition technologies and their impact on various industries. Dive into the latest advancements and applications.",
    imgUrl:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*nyIHZrqSI8xUZx6da2dWIA.png",
    alt: "Image Recognition",
    status: "updated last 3 min ago",
    date: "March 4, 2024",
    content:
      "Image recognition technologies have revolutionized various industries, from security and surveillance to retail and healthcare. These sophisticated systems employ deep learning algorithms to analyze and interpret visual data, enabling machines to identify objects, patterns, and even emotions with remarkable accuracy. In this article, we delve into the captivating realm of image recognition, exploring its applications, advancements, and future potential.\n\nImage recognition, a subset of computer vision, has witnessed significant progress in recent years, thanks to advancements in machine learning and neural networks. Convolutional Neural Networks (CNNs), in particular, have emerged as a powerful tool for image recognition tasks, achieving human-level performance in tasks such as object detection and image classification.\n\nOne of the most notable applications of image recognition is in the field of autonomous vehicles. Self-driving cars rely heavily on image recognition systems to perceive their environment and make real-time decisions to navigate safely. By analyzing data from cameras mounted on the vehicle, these systems can identify road signs, pedestrians, other vehicles, and potential hazards, enabling the vehicle to operate autonomously.\n\nIn addition to automotive applications, image recognition technologies are also transforming the retail industry. Retailers use image recognition systems to analyze customer behavior, track inventory, and enhance the shopping experience. For example, some stores use facial recognition technology to personalize marketing messages and promotions based on the customer's demographics and preferences.\n\nFurthermore, image recognition has profound implications for healthcare, where it is used for medical imaging analysis, disease diagnosis, and treatment planning. Radiologists can leverage image recognition algorithms to detect abnormalities in X-rays, MRIs, and CT scans with greater accuracy and efficiency, leading to earlier diagnosis and improved patient outcomes.\n\nLooking ahead, the future of image recognition holds tremendous promise. Researchers are constantly pushing the boundaries of this technology, exploring new algorithms, architectures, and applications. From improving accessibility for visually impaired individuals to enhancing security and surveillance systems, image recognition will continue to play a pivotal role in shaping the future of various industries.\n\nIn conclusion, image recognition technologies have ushered in a new era of innovation and possibility. By enabling machines to understand and interpret visual data, these systems are transforming industries, enhancing efficiency, and improving lives. As we continue to unlock the full potential of image recognition, the possibilities are truly endless.",
  },
  {
    id: "post-2",
    title: "Transformers in AI",
    description:
      "Discover the transformative power of transformer models in the field of artificial intelligence. Explore their architecture, applications, and impact on natural language processing.",
    imgUrl:
      "https://www.techspot.com/articles-info/2648/images/2023-03-29-image-10.jpg",
    alt: "Transformers in AI",
    status: "updated last 1 hr ago",
    date: "April 2, 2024",
    content:
      "Transformers in AI represent a groundbreaking advancement in natural language processing. These models have revolutionized the field by enabling machines to understand and generate human-like text with unprecedented accuracy and fluency. In this article, we'll explore the transformative power of transformer models, their architecture, applications, and their profound impact on natural language processing (NLP).At the heart of transformer models lies the attention mechanism, which allows the model to focus on different parts of the input sequence when generating output. This mechanism enables transformers to capture long-range dependencies in text, making them highly effective for tasks such as language translation, text summarization, and sentiment analysis. One of the most well-known transformer models is BERT (Bidirectional Encoder Representations from Transformers), which has achieved state-of-the-art performance on a wide range of NLP tasks. BERT's ability to capture bidirectional context has made it particularly effective for tasks requiring understanding of context and nuance in language.Transformers have also been instrumental in advancing conversational AI, enabling chatbots and virtual assistants to engage in more natural and meaningful conversations with users. By fine-tuning pre-trained transformer models on specific tasks or domains, developers can create AI systems that are tailored to particular applications and use cases.In addition to their applications in NLP, transformers have also been applied to other domains such as computer vision and reinforcement learning. The versatility and effectiveness of transformer models make them a powerful tool for solving a wide range of AI problems. Looking ahead, the future of transformers in AI is bright. Researchers continue to innovate and improve upon existing transformer architectures, exploring ways to make them more efficient, scalable, and adaptable to new tasks and domains. With ongoing advancements in AI and machine learning, transformers are poised to remain at the forefront of innovation in the field for years to come.",
  },
  {
    id: "post-3",
    title: "Action Learning in AI",
    description:
      "Explore the concept of action learning in the context of artificial intelligence. Learn how this approach contributes to continuous improvement and problem-solving in AI systems.",
    imgUrl:
      "https://www.saplingcorp.com/_next/image?url=%2Fimg%2Fheaders%2Fmidjourneyaiart_digitalart_artificialintelligence.png&w=1920&q=100",
    alt: "Action Learning in AI",
    status: "updated last 3 hr ago",
    date: "April 2, 2024",
    content:
      "Action learning is a powerful concept in the realm of artificial intelligence, fostering continuous improvement and problem-solving in AI systems. In this article, we'll explore the concept of action learning in the context of artificial intelligence, its principles, applications, and its role in driving innovation in AI. At its core, action learning involves learning through action and reflection. AI systems are trained to take actions in their environment, observe the outcomes of those actions, and adjust their behavior accordingly based on feedback. This iterative process enables AI systems to learn from experience and improve their performance over time. Action learning has been applied to a wide range of AI tasks, including robotics, autonomous vehicles, and game playing. In robotics, for example, robots can learn to perform complex tasks such as grasping objects or navigating through environments by interacting with their surroundings and refining their actions based on feedback from sensors. One of the key advantages of action learning is its ability to handle complex and dynamic environments where traditional rule-based approaches may fall short. By allowing AI systems to learn from experience rather than relying on pre-defined rules, action learning enables them to adapt and respond to changing conditions more effectively. In addition to its applications in robotics and autonomous systems, action learning has also been used in areas such as natural language processing, computer vision, and healthcare. For example, AI systems can learn to generate more accurate and contextually appropriate responses in conversational AI applications by interacting with users and receiving feedback on their responses. Looking ahead, the future of action learning in AI is promising. As AI systems become more integrated into everyday life and interact with increasingly complex environments, the need for flexible and adaptive learning approaches will only grow. Action learning provides a powerful framework for achieving this goal, enabling AI systems to learn and improve in real-world settings.",
  },
  {
    id: "post-4",
    title: "Large Language Models (LLMs)",
    description:
      "Dive into the world of large language models, exploring their architecture, training processes, and applications in natural language understanding and generation.",
    imgUrl:
      "https://img.freepik.com/premium-photo/painting-man-with-blue-background-colorful-image-man-hoodie_905510-39273.jpg?w=740",
    alt: "Large Language Models (LLMs)",
    status: "updated last 3 days ago",
    date: "April 2, 2024",
    content:
      "Large Language Models (LLMs) are at the forefront of natural language understanding and generation, pushing the boundaries of what's possible in AI-driven text processing. In this article, we'll dive into the world of LLMs, exploring their architecture, training processes, and applications in various domains. At their core, LLMs are deep learning models that are trained on vast amounts of text data to understand and generate human-like text. These models typically consist of multiple layers of neural networks, with millions or even billions of parameters, allowing them to capture complex patterns and structures in language. One of the key innovations that has driven the success of LLMs is the use of large-scale pre-training followed by fine-tuning on specific tasks. During pre-training, the model is exposed to a wide range of text data and learns to predict the next word in a sequence based on context. This process allows the model to develop a rich understanding of language structure and semantics. Once pre-training is complete, the model can be fine-tuned on specific tasks or domains by exposing it to additional training data and adjusting its parameters accordingly. This fine-tuning process enables LLMs to adapt to different applications, such as sentiment analysis, text summarization, and question answering. LLMs have been applied to a wide range of applications across industries, including customer service, content generation, and document analysis. For example, companies use LLMs to generate personalized responses to customer inquiries, summarize large volumes of text data, and extract insights from unstructured documents. Looking ahead, the future of LLMs is promising. Researchers continue to explore ways to improve the efficiency, scalability, and capabilities of these models, with the goal of making them more accessible and adaptable to a wide range of tasks and domains. With ongoing advancements in AI and machine learning, LLMs are poised to remain a cornerstone of natural language processing for years to come.",
  },
  {
    id: "post-5",
    title: "Research in AI",
    description:
      "Stay updated on the latest developments and breakthroughs in artificial intelligence research. Explore the cutting-edge projects and innovations shaping the future of AI.",
    imgUrl:
      "https://d1lss44hh2trtw.cloudfront.net/resize?type=webp&url=https%3A%2F%2Fshacknews-www.s3.amazonaws.com%2Fassets%2Farticle%2F2023%2F03%2F30%2Fpope-jacket-ai_feature.jpg&width=2064&sign=Qw0dUlQkzD9NiWZE1rSPavaGdUD1lxebtYlFu3jaWDU",
    alt: "Research in AI",
    status: "updated last 3 days ago",
    date: "April 2, 2024",
    content:
      "Stay updated on the latest developments and breakthroughs in artificial intelligence research with our comprehensive guide. In this article, we'll explore the cutting-edge projects and innovations shaping the future of AI, from advanced algorithms to novel applications. Artificial intelligence research is a dynamic and rapidly evolving field, with researchers pushing the boundaries of what's possible with AI-driven technologies. From breakthroughs in machine learning and deep learning to advancements in computer vision and robotics, the pace of innovation in AI is accelerating. One of the key areas of focus in AI research is improving the performance and capabilities of AI systems across a wide range of tasks and domains. Researchers are developing new algorithms and architectures to enhance the efficiency, accuracy, and scalability of AI models, enabling them to tackle increasingly complex problems. In addition to advancing the state-of-the-art in AI technology, researchers are also exploring the ethical and societal implications of AI-driven systems. Questions around fairness, accountability, and transparency in AI are receiving increased attention, with efforts underway to develop frameworks and guidelines for responsible AI development and deployment. AI research is also driving progress in interdisciplinary areas such as healthcare, finance, and sustainability. From using AI to improve diagnosis and treatment in healthcare to leveraging AI for climate modeling and environmental monitoring, researchers are harnessing the power of AI to address some of society's most pressing challenges. Looking ahead, the future of AI research is full of possibilities. With ongoing advancements in technology and an increasingly interconnected global research community, AI researchers are poised to make even greater strides in the years to come. Stay informed and inspired by the latest developments and breakthroughs in AI research.",
  },
];
const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Login",

        element: (
          <>
            <Login />
          </>
        ),
      },

      {
        path: "/Single",
        element: <Single blogs={blogs} />,
      },
      {
        path: "/Explore",
        element: <Explore blogs={blogs} />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
