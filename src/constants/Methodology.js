import SystemDiagram from "./../assets/System.png";
export const methodologySections = [
  {
    title: "System Diagram",
    image: SystemDiagram,
    alt: "System Diagram",
    caption: "Figure 1: Overview of the system architecture.",
  },
  {
    title: "Methodology Overview",
    content: `Our system is designed using a combination of IoT-based sensor networks, data analytics, and machine learning models to monitor and manage industrial emissions in real time. The sensor network continuously collects data on key pollutants like CO, NO2, and SO2. This data is sent to a central processing and analysis unit where machine learning algorithms, including convolutional neural networks (CNNs), analyze the information to detect patterns and predict potential emission exceedances. Data is stored in a database for historical analysis and continuous improvement of the prediction models.

The processed data is made available to users through an interactive dashboard, which displays real-time air quality insights. An API service connects the analysis results to external systems and stakeholders, triggering real-time alerts when emissions exceed predefined thresholds. The use of edge analysis ensures instant decision-making and prompt notifications. This architecture enables effective emission monitoring and proactive management, reducing industrial impact on the environment.`,
  },
];