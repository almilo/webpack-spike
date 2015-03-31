import './index.css';
import angular from 'angular';
import pdfModule from './pdf/index';

angular.module('app', [
    pdfModule.name
]);
