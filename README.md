# COVID-19 Data Visualization

This project visualizes COVID-19 data using various chart types with Chart.js in an Ionic application. The project includes line, bar, pie, doughnut, radar, and polar area charts to provide different perspectives on the data.

## Features

- Line Chart: Shows the trend of total confirmed cases and active cases over time.
- Bar Chart: Visualizes the daily confirmed cases and daily deaths.
- Pie Chart: Provides a proportional view of total confirmed cases, total deaths, total recovered, and active cases.
- Doughnut Chart: Similar to the pie chart, but with a hole in the center for a different visual effect.
- Radar Chart: Compares the different metrics (total confirmed cases, total deaths, total recovered, active cases) to each other.
- Polar Area Chart: Displays the magnitude of each metric relative to others, similar to a pie chart but in a circular manner.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Ionic CLI](https://ionicframework.com/docs/cli)
- [Angular CLI](https://angular.io/cli)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/Nathi72TcF/TopicWorx.git
    cd TopicWorx
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Install Chart.js:

    ```sh
    npm install chart.js
    ```

## Running the Application

1. Start the development server:

    ```sh
    ionic serve
    ```

2. Open your browser and navigate to `http://localhost:8100`.

## Project Structure

- **src/assets/data.json:** Contains the COVID-19 data.
- **src/app/home.page.ts:** The main TypeScript file that handles data fetching and chart creation.
- **src/app/home.page.html:** The HTML file with canvas elements to render the charts.

## Usage

1. Place the `data.json` file in the `src/assets` folder with the following content:

    ```json
    [
      {
        "Date": "2020/03/05",
        "Total Confirmed Cases": 1,
        "Total Deaths": 0,
        "Total Recovered": 0,
        "Active Cases": 1,
        "Daily Confirmed Cases": 0,
        "Daily Deaths": 0
      },
      {
        "Date": "2020/03/06",
        "Total Confirmed Cases": 1,
        "Total Deaths": 0,
        "Total Recovered": 0,
        "Active Cases": 1,
        "Daily Confirmed Cases": 0,
        "Daily Deaths": 0
      },
      {
        "Date": "2020/03/07",
        "Total Confirmed Cases": 2,
        "Total Deaths": 0,
        "Total Recovered": 0,
        "Active Cases": 2,
        "Daily Confirmed Cases": 1,
        "Daily Deaths": 0
      },
      {
        "Date": "2020/03/08",
        "Total Confirmed Cases": 3,
        "Total Deaths": 0,
        "Total Recovered": 0,
        "Active Cases": 3,
        "Daily Confirmed Cases": 1,
        "Daily Deaths": 0
      },
      {
        "Date": "2020/03/09",
        "Total Confirmed Cases": 7,
        "Total Deaths": 0,
        "Total Recovered": 0,
        "Active Cases": 7,
        "Daily Confirmed Cases": 4,
        "Daily Deaths": 0
      },
      {
        "Date": "2020/03/10",
        "Total Confirmed Cases": 7,
        "Total Deaths": 0,
        "Total Recovered": 0,
        "Active Cases": 7,
        "Daily Confirmed Cases": 0,
        "Daily Deaths": 0
      },
      {
        "Date": "2020/03/11",
        "Total Confirmed Cases": 13,
        "Total Deaths": 0,
        "Total Recovered": 0,
        "Active Cases": 13,
        "Daily Confirmed Cases": 6,
        "Daily Deaths": 0
      },
      {
        "Date": "2020/03/12",
        "Total Confirmed Cases": 17,
        "Total Deaths": 0,
        "Total Recovered": 0,
        "Active Cases": 17,
        "Daily Confirmed Cases": 4,
        "Daily Deaths": 0
      },
      {
        "Date": "2020/03/13",
        "Total Confirmed Cases": 25,
        "Total Deaths": 0,
        "Total Recovered": 0,
        "Active Cases": 25,
        "Daily Confirmed Cases": 8,
        "Daily Deaths": 0
      }
    ]
    ```

2. Add the following canvas elements in `chart.page.html`:

    ```html
    <canvas id="lineChart" width="400" height="400"></canvas>
    <p>**Line Chart:** Shows the trend of total confirmed cases and active cases over time.</p>
    <canvas id="barChart" width="400" height="400"></canvas>
    <p>**Bar Chart:** Visualizes the daily confirmed cases and daily deaths.</p>
    <canvas id="pieChart" width="400" height="400"></canvas>
    <p>**Pie Chart:** Provides a proportional view of total confirmed cases, total deaths, total recovered, and active cases.</p>
    <canvas id="doughnutChart" width="400" height="400"></canvas>
    <p>**Doughnut Chart:** Similar to the pie chart, but with a hole in the center for a different visual effect.</p>
    <canvas id="radarChart" width="400" height="400"></canvas>
    <p>**Radar Chart:** Compares the different metrics (total confirmed cases, total deaths, total recovered, active cases) to each other.</p>
    <canvas id="polarAreaChart" width="400" height="400"></canvas>
    <p>**Polar Area Chart:** Displays the magnitude of each metric relative to others, similar to a pie chart but in a circular manner.</p>
    ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
