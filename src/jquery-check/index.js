import angular from 'angular';
import jQueryCheckService from './jquery-check-service';

export default angular.module('app.jquery-check', [])
    .factory('jQueryCheckService', jQueryCheckService);
