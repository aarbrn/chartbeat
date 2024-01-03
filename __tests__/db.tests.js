const fs = require('fs');
const path = require('path');
const db = require('');
const controller = require('../server/controllers/controller.js')

// NOTE: testing here uses username 'aaa', password 'xxx'

const testEntry = {
    username: 'aaa',
    bloodSugar: 111,
    sysPressure: 122,
    diaPressure: 88,
};

let newEntryId;
let newEntry;
let resData;

// test create entry

describe('db entries', () => {
    it('posts a new entry to the db', () => {
        const result = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/entry', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(testEntry),
                });
            console.log('response in test: ', response);
            newEntryId = await response.json().id;
        } catch (error){
            console.log('error in post new entry test')
            }
        }
        expect(result).not.toBeInstanceOf(Error);
        expect(newEntryId).toBeInstanceOf(String);
    });
    xit('retrieves the new entry from the db', () => {
        const result = async () => {
            try {
                const response = await fetch('hhtp://localhost:3000/api/homepage/bloodsugar');
                resData = await response.json();
            } catch (error) {
                console.log('error in get new entry test')
            }
        };
        newEntry = resData.filter(el => el._id === newEntryId);
        expect(result).not.toBeInstanceOf(Error);
        expect(newEntry).toBeTruthy();
    })
})

// test retrieve entry
// test delete entry 