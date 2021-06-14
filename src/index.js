import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SharedTime from './SharedTime';

ReactDOM.render(
  <table>
    <caption>SharedTime Components</caption>
    <tbody>
      <tr>
        <th>TimeZones</th>
      </tr>
      <React.StrictMode>
        <tr>
          <td><SharedTime /></td>
        </tr>
        <tr>
          <td><SharedTime location="london"/></td>
        </tr>
      </React.StrictMode>
    </tbody>
  </table>,
  document.getElementById('root')
);
