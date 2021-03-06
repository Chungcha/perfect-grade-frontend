/* eslint-disable react/prop-types */
import React from 'react';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';
import { ExportToCsv } from 'export-to-csv';


const ScheduleSideBar = (props) => {
  const goHome = (e) => {
    e.preventDefault();
    props.history.push('/');
  };

  const csvExport = () => {
    if (!props.loading) {
      // array to store data
      const data = [];
      // necessary info from each post-flattened asgmt
      props.assignments.forEach((date) => {
        const asgmts = date[1];
        asgmts.forEach((a) => {
          const fields = {
            TASK: a.description,
            LIST: a.course.name,
            DUEDATE: a.adj_date,
          };
          data.push(fields);
        });
      });
      // CSV file options setup
      const options = {
        fieldSeparator: ' , ',
        filename: 'flat_schedule',
        quoteStrings: '"',
        decimalSeparator: '.',
        showLabels: true,
        showTitle: true,
        title: 'Adjusted Schedule',
        useTextFile: false,
        useBom: true,
        useKeysAsHeaders: true,
      };

      const csvExporter = new ExportToCsv(options);
      csvExporter.generateCsv(data);
    }
  };

  return (
    <div className="sidenav">
      <Button
        id="export-button"
        onClick={csvExport}
      >
        Export To CSV
      </Button>
      <br />
      <Button
        variant="outline-primary"
        size="sm"
        onClick={goHome}
        className="home-btn"
      >
        {'<<  Home'}
      </Button>
    </div>
  );
};

export default withRouter(ScheduleSideBar);
