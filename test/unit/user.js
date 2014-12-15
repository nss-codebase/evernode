'use strict';

var expect     = require('chai').expect,
    User       = require('../../server/models/user'),
    Lab        = require('lab'),
    lab        = exports.lab = Lab.script(),
    describe   = lab.describe,
    it         = lab.it;

describe('User', function(){

  describe('constructor', function(){
    it('should create a User object', function(done){
      var user = new User({username:'bob'});

      expect(user).to.be.instanceof(User);
      expect(user.username).to.equal('bob');
      done();
    });
  });

});
