import { Component, OnInit } from '@angular/core';
import * as CanvasJS from 'src/assets/canvasjs.min.js';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CiAgentComServiceService } from '../services/ci-agent-com-service.service';


@Component({
  selector: 'app-ci-agent-compliance-monitoring',
  templateUrl: './ci-agent-compliance-monitoring.component.html',
  styleUrls: ['./ci-agent-compliance-monitoring.component.css']
})
export class CIAgentComplianceMonitoringComponent implements OnInit {


  constructor(private fb: FormBuilder, private ciAgentSer: CiAgentComServiceService) { }

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  dateRangeStart: any ;
  dateRangeEnd: any ;

  formval:any = {};

  selectCountry: any

  public information: any = [];
  callopen: Array<any> = [];
  callrecord: Array<any> = []
  lobcheck: Array<any> = [];
  selfhelp: Array<any> = []
  callclose: Array<any> = [];
  canceltec: Array<any> = []
  empSym: Array<any> = [];
  overbehave: Array<any> = []
  datacall1: any
  datacall2: any
  datacall3: any
  datacall4: any
  datacall5: any
  datacall6: any
  datacall7: any
  datacall8: any

  public daterange: any = {};

  public options: any = {
    locale: { format: 'DD-MM-YYYY' },
    alwaysShowCalendars: false,
  };

  public selectedDate(value: any, datepicker?: any) {
    datepicker.start = value.start;
    datepicker.end = value.end;

    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;

    console.log("start date range :-  ", value.start.format('DD-MM-YYYY'))
    console.log("end date range :-  ", value.end.format('DD-MM-YYYY'))
    this.dateRangeStart = value.start.format('DD-MM-YYYY');
    this.dateRangeEnd = value.end.format('DD-MM-YYYY');
    console.log("start date range :-  ", this.dateRangeStart)
    // console.log("end date range :-  ", value.end.format('DD-MM-YYYY'))
  }

  agentFilters: FormGroup;
  
  get region() {
    return this.agentFilters.get('region');
  }
  get permin() {
    return this.agentFilters.get('permin');
  }
  get permax() {
    return this.agentFilters.get('permax');
  }

  ngOnInit() {
    this.selectCountryFunction();
    this.InitialLevelGraph();

    this.agentFilters = this.fb.group({
      date1:[],
      region: [],
      permin: [],
      permax: [],
    });
  }
  onSubmit(){
    
    
    console.log("Submit data filters ",this.agentFilters.value);

  }

  selectCountryFunction() {
    this.dropdownList = [
      { "id": 1, "itemName": "Florida" },
      { "id": 2, "itemName": "XHS" },
      { "id": 3, "itemName": "GBR" },
      { "id": 4, "itemName": "WNE" },
      { "id": 5, "itemName": "Freedom" },
      { "id": 6, "itemName": "TwinCity" },
      { "id": 7, "itemName": "Beltway" },
      { "id": 8, "itemName": "Keystone" },
      { "id": 9, "itemName": "Portland" },
      { "id": 10, "itemName": "Houston" },
      { "id": 7, "itemName": "Big South" },
      { "id": 8, "itemName": "Mountain West" },
      { "id": 9, "itemName": "California" },
      { "id": 10, "itemName": "Seattle" }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };
  }
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }

  


  // ---------------------------percentage filter-----------------------------//

//    minValue;
//    maxValue;

//  minChangeEvent(event) {
//     if (this.minValue > 100) {
//       this.minValue = 100;
//       console.log('Min Value New :-  ', this.minValue);
//       this.minValue = event;
//       this.ciAgentSer.minPercentFun(this.minValue).subscribe(data => {
//         console.log("Min Value New :- ", this.minValue);
//       })
//     }
//     else if (this.minValue < 0) {
//       this.minValue = 0;
//       console.log('Min Value New :-  ', this.minValue);
//       this.minValue = event;
//       this.ciAgentSer.minPercentFun(this.minValue).subscribe(data => {
//         console.log("Min Value New :- ", this.minValue);
//       })
//     }
//     else {
//       console.log('Min Value New :-  ', this.minValue);
//       this.minValue = event;
//       this.ciAgentSer.minPercentFun(this.minValue).subscribe(data => {
//         console.log("Min Value New :- ", this.minValue);
//       })
//     }

//   }

//    maxChangeEvent(event) {
//     if (this.maxValue > 100) {
//       this.maxValue = 100;
//       console.log('Max Value New :-  ', this.maxValue);
//       this.maxValue = event;
//       this.ciAgentSer.minPercentFun(this.maxValue).subscribe(data => {
//         console.log("Max Value New :- ", this.maxValue);
//       })
//     }
//     else if (this.maxValue < 0) {
//       this.maxValue = 0;
//       console.log('Max Value New :-  ', this.maxValue);
//       this.maxValue = event;
//       this.ciAgentSer.minPercentFun(this.maxValue).subscribe(data => {
//         console.log("Max Value New :- ", this.maxValue);
//       })
//     }
//     else {
//       console.log('Max Value New :-  ', this.maxValue);
//       this.maxValue = event;
//       this.ciAgentSer.minPercentFun(this.maxValue).subscribe(data => {
//         console.log("Max Value New :- ", this.maxValue);
//       })
//     }

//   }
 

  // formdata() {

  //   this.formval = {
  //     selectCountryList : this.selectedItems,
  //     minimumVal : this.minValue, 
  //     maximumVal : this.maxValue, 
  //     dateStart : this.dateRangeStart, 
  //     dateEnd : this.dateRangeEnd, 
  //   }
     
  //   console.log("On Submit Values are   ",this.formval)
  // }

  // ---------------------------graphs functions-----------------------------//

  InitialLevelGraph() {
    this.ciAgentSer.initialAPICall().subscribe(data => {
      
      this.information = data;
      console.log("my data  ", this.information.data2);



      //-------------------------- callopen graph--------------------------//

      let callOpeningChart = new CanvasJS.Chart("callOpeningCompliance", {
        animationEnabled: true,
        axisX: {
          interval: 1
        },
        axisY: {
          interval: 100
        },
        axisY2: {
          interlacedColor: "rgba(1,77,101,.2)",
          gridColor: "rgba(1,77,101,.1)",
          title: "Number of Companies"
        },
        dataPointWidth: 7,
        data: [{
          type: "bar",
          name: "companies",
          axisYType: "primary",
          color: "#0165",
          dataPoints: this.information.data2[1].call_opening_compliance_data
        }]
      });
      callOpeningChart.render();

      //-------------------------- LOBCheck graph--------------------------//
      
        let LOBCheckChart = new CanvasJS.Chart("otherLOBCheck", {
          animationEnabled: true,
          axisX: {
            interval: 1
          },
          axisY: {
            interval: 100
          },
          axisY2: {
            interlacedColor: "rgba(1,77,101,.2)",
            gridColor: "rgba(1,77,101,.1)",
            title: "Number of Companies"
          },
          dataPointWidth: 7,
          data: [{
            type: "bar",
            name: "companies",
            axisYType: "primary",
            color: "#0165",
            dataPoints: this.information.data2[3].other_lob_check_data
          }]
        });
        LOBCheckChart.render();
      

      //-------------------------- callRecording graph--------------------------//

        let callRecordingChart = new CanvasJS.Chart("callRecordingDisClosure", {
          animationEnabled: true,
          axisX: {
            interval: 1
          },
          axisY: {
            interval: 100
          },
          axisY2: {
            interlacedColor: "rgba(1,77,101,.2)",
            gridColor: "rgba(1,77,101,.1)",
            title: "Number of Companies"
          },
          dataPointWidth: 7,
          data: [{
            type: "bar",
            name: "companies",
            axisYType: "primary",
            color: "#0165",
            dataPoints: this.information.data2[0].call_recording_disclosure_data
          }]
        });
        callRecordingChart.render();
    
      

      //-------------------------- cancelTech graph--------------------------//
      
      
        let cancelTechChart = new CanvasJS.Chart("cancelTechVisit", {
          animationEnabled: true,
          axisX: {
            interval: 1
          },
          axisY: {
            interval: 100
          },
          axisY2: {
            interlacedColor: "rgba(1,77,101,.2)",
            gridColor: "rgba(1,77,101,.1)",
            title: "Number of Companies"
          },
          dataPointWidth: 7,
          data: [{
            type: "bar",
            name: "companies",
            axisYType: "primary",
            color: "#0165",
            dataPoints: this.information.data2[4].cancel_tech_visit_data
          }]
        });
        cancelTechChart.render();
      
    

      //-------------------------- selfHelp graph--------------------------//

        let selfHelpChart = new CanvasJS.Chart("selfHelpOption", {
          animationEnabled: true,
          axisX: {
            interval: 1
          },
          axisY: {
            interval: 100
          },
          axisY2: {
            interlacedColor: "rgba(1,77,101,.2)",
            gridColor: "rgba(1,77,101,.1)",
            title: "Number of Companies"
          },
          dataPointWidth: 7,
          data: [{
            type: "bar",
            name: "companies",
            axisYType: "primary",
            color: "#0165",
            dataPoints: this.information.data2[5].self_help_xfinity_my_account_app_data
          }]
        });
        selfHelpChart.render();
      

      //-------------------------- callClosing graph--------------------------//
      
      
        let callClosingChart = new CanvasJS.Chart("callClosingCompliance", {
          animationEnabled: true,
          axisX: {
            interval: 1,
            gridThickness: 0,
            gridColor: "rgba(0,0,0,0)",
          },
          // axisY: {
          //   interval: 100
          // },
          axisY2: {
            interlacedColor: "rgba(0,0,0,0)",
            gridColor: "rgba(0,0,0,0)",
            title: "Number of Companies"
          },
          dataPointWidth: 7,
          data: [{
            type: "bar",
            name: "companies",
            axisYType: "primary",
            color: "#0165",
            dataPoints: this.information.data2[6].call_closing_data
          }]
        });
        callClosingChart.render();
    
    

      //-------------------------- overallbehave graph--------------------------//
      
        var overRollBehaveChart = new CanvasJS.Chart("overallBehaviouralSentiments", {
          animationEnabled: true,
          title: {
            horizontalAlign: "left"
          },
    
          data: [{
            type: "doughnut",

            dataPoints: this.information.data2[7].behavioural_sentiment_data
          }]
        });
        overRollBehaveChart.render();
    

      //-------------------------- empathySympathy graph--------------------------//
      
        var empathySympathyChart = new CanvasJS.Chart("empathySympathy", {
          animationEnabled: true,
          theme: "light2",
          dataPointWidth: 7,
          axisX: {
            valueFormatString: "MMM"
          },
          axisY: {
            labelFormatter: addSymbols
          },
          toolTip: {
            shared: true
          },
          legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
          },
    
          data: [
            {
              type: "column",
              name: "Actual Sales",
              showInLegend: true,
              xValueFormatString: "MMMM YYYY",
              yValueFormatString: "#,##0",
              dataPoints: this.information.data2[2].empathy_or_sympathy_data
            },
          ]
        });
        empathySympathyChart.render();
    
        function addSymbols(e) {
          var suffixes = ["", "K", "M", "B"];
          var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
    
          if (order > suffixes.length - 1)
            order = suffixes.length - 1;
    
          var suffix = suffixes[order];
          return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
        }
    
        function toggleDataSeries(e) {
          if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
          } else {
            e.dataSeries.visible = true;
          }
          e.chart.render();
        }
    
      

    })

  }







}

