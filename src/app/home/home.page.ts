import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TopicWorxService } from './../service/topic-worx.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  // doughnut
  @ViewChild('doughnutCanvas', { static: true }) doughnutCanvas: ElementRef;
  private doughnutChart: Chart;

  dataArray: any[] = [];

  constructor(private topicworx: TopicWorxService) {}

  ngOnInit() {
    // this.ChartData();
    this.loadChartData();
  }

  loadChartData() {
    this.topicworx.getData().subscribe(
      (data) => {
        const formattedData = data.map((item) => ({
          Date: item.Date || '',
          'Total Confirmed Cases': Number(item['Total Confirmed Cases']) || 0,
          'Total Deaths': Number(item['Total Deaths']) || 0,
          'Total Recovered': Number(item['Total Recovered']) || 0,
          'Active Cases': Number(item['Active Cases']) || 0,
          'Daily Confirmed Cases': Number(item['Daily Confirmed Cases']) || 0,
          'Daily Deaths': Number(item['Daily Deaths']) || 0,
        }));
        this.createCharts(formattedData);
      },
      (error) => {
        console.error('Error loading JSON data:', error);
      }
    );
  }

  createCharts(data) {
    this.createLineChart(data);
    this.createBarChart(data);
    this.createPieChart(data);
    this.createPolarAreaChart(data);
    this.createRadarChart(data);
    this.createDoughnutChart(data);
  }

  createLineChart(chartData) {
    const ctx = document.getElementById('lineChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: chartData.map((d) => d.Date),
        datasets: [
          {
            label: 'Total Confirmed Cases',
            data: chartData.map((d) => d['Total Confirmed Cases']),
            borderColor: 'blue',
            fill: false,
          },
          {
            label: 'Active Cases',
            data: chartData.map((d) => d['Active Cases']),
            borderColor: 'orange',
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'COVID-19 Line Chart',
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Date',
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Count',
              },
            },
          ],
        },
      },
    });
  }

  createBarChart(chartData) {
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: chartData.map((d) => d.Date),
        datasets: [
          {
            label: 'Daily Confirmed Cases',
            data: chartData.map((d) => d['Daily Confirmed Cases']),
            backgroundColor: 'purple',
          },
          {
            label: 'Daily Deaths',
            data: chartData.map((d) => d['Daily Deaths']),
            backgroundColor: 'black',
          },
        ],
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'COVID-19 Bar Chart',
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Date',
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Count',
              },
            },
          ],
        },
      },
    });
  }

  createPieChart(chartData) {
    const ctx = document.getElementById('pieChart') as HTMLCanvasElement;
    if (ctx) {
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: [
            'Total Confirmed Cases',
            'Total Deaths',
            'Total Recovered',
            'Active Cases',
          ],
          datasets: [
            {
              data: [
                chartData.reduce(
                  (sum, d) => sum + d['Total Confirmed Cases'],
                  0
                ),
                chartData.reduce((sum, d) => sum + d['Total Deaths'], 0),
                chartData.reduce((sum, d) => sum + d['Total Recovered'], 0),
                chartData.reduce((sum, d) => sum + d['Active Cases'], 0),
              ],
              backgroundColor: ['blue', 'red', 'green', 'orange'],
            },
          ],
        },
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'COVID-19 Pie Chart',
          },
        },
      });
    } else {
      console.error('Canvas element not found');
    }
  }

  createDoughnutChart(chartData) {
    const ctx = document.getElementById('doughnutChart') as HTMLCanvasElement;
    if (ctx) {
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: [
            'Total Confirmed Cases',
            'Total Deaths',
            'Total Recovered',
            'Active Cases',
          ],
          datasets: [
            {
              data: [
                chartData.reduce(
                  (sum, d) => sum + d['Total Confirmed Cases'],
                  0
                ),
                chartData.reduce((sum, d) => sum + d['Total Deaths'], 0),
                chartData.reduce((sum, d) => sum + d['Total Recovered'], 0),
                chartData.reduce((sum, d) => sum + d['Active Cases'], 0),
              ],
              backgroundColor: ['blue', 'red', 'green', 'orange'],
            },
          ],
        },
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'COVID-19 Doughnut Chart',
          },
        },
      });
    } else {
      console.error('Canvas element not found');
    }
  }

  createRadarChart(chartData) {
    const ctx = document.getElementById('radarChart') as HTMLCanvasElement;
    if (ctx) {
      new Chart(ctx, {
        type: 'radar',
        data: {
          labels: [
            'Total Confirmed Cases',
            'Total Deaths',
            'Total Recovered',
            'Active Cases',
          ],
          datasets: [
            {
              label: 'COVID-19 Data',
              data: [
                chartData.reduce(
                  (sum, d) => sum + d['Total Confirmed Cases'],
                  0
                ),
                chartData.reduce((sum, d) => sum + d['Total Deaths'], 0),
                chartData.reduce((sum, d) => sum + d['Total Recovered'], 0),
                chartData.reduce((sum, d) => sum + d['Active Cases'], 0),
              ],
              backgroundColor: 'rgba(179, 181, 198, 0.2)',
              borderColor: 'rgba(179, 181, 198, 1)',
              pointBackgroundColor: 'rgba(179, 181, 198, 1)',
            },
          ],
        },
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'COVID-19 Radar Chart',
          },
        },
      });
    } else {
      console.error('Canvas element not found');
    }
  }

  createPolarAreaChart(chartData) {
    const ctx = document.getElementById('polarAreaChart') as HTMLCanvasElement;
    if (ctx) {
      new Chart(ctx, {
        type: 'polarArea',
        data: {
          labels: [
            'Total Confirmed Cases',
            'Total Deaths',
            'Total Recovered',
            'Active Cases',
          ],
          datasets: [
            {
              data: [
                chartData.reduce(
                  (sum, d) => sum + d['Total Confirmed Cases'],
                  0
                ),
                chartData.reduce((sum, d) => sum + d['Total Deaths'], 0),
                chartData.reduce((sum, d) => sum + d['Total Recovered'], 0),
                chartData.reduce((sum, d) => sum + d['Active Cases'], 0),
              ],
              backgroundColor: ['blue', 'red', 'green', 'orange'],
            },
          ],
        },
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'COVID-19 Polar Area Chart',
          },
        },
      });
    } else {
      console.error('Canvas element not found');
    }
  }
}
