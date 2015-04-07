import './index.css';
import './index.scss';
import angular from 'angular';
import pdfModule from './pdf/index';
import jQueryCheckModule from './jquery-check/index';

angular.module('app',
    [
        pdfModule.name,
        jQueryCheckModule.name
    ])
    .run((jQueryCheckService) => {
        console.log('Application element selected via attribute selector: ', jQueryCheckService.getApplicationElement());
    });
