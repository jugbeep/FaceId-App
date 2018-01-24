var Recognize = require('../models/faces');
var expect = require('chai').expect;

describe("checking if faces model works", function () {
	describe("new faces name", function() {
		it('initializes a new faces name', function() {
			let person = new Recognize();
			person.name = "John";
			expect(person.name).to.equal('John');
		})
	})
})

describe("checking if faces model works", function () {
	describe("new faces name", function() {
		it('initializes a new faces photo', function() {
			let person = new Recognize();
			person.photoUrl = "new.jpg";
			expect(person.photoUrl).to.equal('new.jpg');
		})
	})
})

describe("checking if faces model works", function () {
	describe("new faces name", function() {
		it('initializes a new faces likes', function() {
			let person = new Recognize();
			person.likes = "new.jpg";
			expect(person.likes).to.equal('new.jpg');
		})
	})
})

describe("checking if faces model works", function () {
	describe("new faces name", function() {
		it('initializes a new faces dislikes', function() {
			let person = new Recognize();
			person.dislikes = "new.jpg";
			expect(person.dislikes).to.equal('new.jpg');
		})
	})
})

describe("checking if faces model works", function () {
	describe("new faces name", function() {
		it('initializes a new faces hometown', function() {
			let person = new Recognize();
			person.hometown = "new.jpg";
			expect(person.hometown).to.equal('new.jpg');
		})
	})
})

