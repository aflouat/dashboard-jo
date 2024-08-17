# Olympic Dashboard

## Overview

**Olympic Dashboard** is a web application that provides detailed insights into Olympic Games data. It features interactive visualizations that display the distribution of medals by country and track the performance of countries over time. Users can explore detailed statistics, view country-specific participation data, and analyze historical trends across various Olympic events.

## Features

- **Dashboard View:** Displays the distribution of medals using a pie chart.
- **Country Details Page:** Shows a line chart with the number of medals won by a selected country over time.
- **Responsive Design:** Ensures a consistent experience across different devices.
- **Interactive Charts:** Hover to see detailed medal counts and click to navigate to country-specific pages.

## Technology Stack

- **Frontend:** Angular, TypeScript
- **Charts:** Ngx-Charts
- **Backend:** Mock JSON data (for demonstration purposes)

## Getting Started

### Prerequisites

- Node.js and npm installed on your local machine.
- Angular CLI installed globally via npm: `npm install -g @angular/cli`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/aflouat/dashboard-jo.git

Navigate to the project directory:
`cd olympic-dashboard`

Install dependencies:
`npm install`

Running the App / Start the development server:
`ng serve`

Open your browser and navigate to:
`http://localhost:4200`
The app should now be running locally on your machine.

**Usage**
Dashboard: View the overall medal distribution by country. Hover over the pie chart segments to see detailed counts.
Country Details: Click on a country in the dashboard to navigate to its detailed page, where you can see its performance over time via a line chart.

**Testing**, Run unit tests:
`ng test`

**Deployment**, To build the project for production, use:
`ng build --prod`
The output will be in the dist/ directory. You can deploy this to any web server.

**Contributing**, Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure that all new code includes relevant tests.

**Project Management**, For more details on features, issues, and project management, visit the Project Board : `https://github.com/users/aflouat/projects/3/views/1`

**Credits** : 
Angular: A platform and framework for building single-page client applications using HTML and TypeScript. 
Ngx-Charts: A charting library for Angular based on D3.js.
RxJS: A library for reactive programming using observables. 
Angular CLI: A command-line interface for Angular applications. 

**License**
This project is licensed under the MIT License - see the LICENSE file for details.

**Contact** : 
For any questions or feedback, please reach out to aflouat@gmail.com.
