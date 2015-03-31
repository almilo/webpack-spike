import './index.css';
import './index.scss';
import angular from 'angular';
import pdfModule from './pdf/index';

angular.module('app', [
    pdfModule.name
]);
