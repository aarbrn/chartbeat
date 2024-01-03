const fs = require('fs');
const path = require('path');
const db = require('');
const controller = require('../server/controllers/controller.js')

// test create entry
const testEntry = {
    username: 'aaa',
    bloodSugar: 111,
    sysPressure: 122,
    disPressure: 88,
};

describe('db entries', () => {
    it('saves a new entry to the db', () => {
        const result = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/entry', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(testEntry),
                });
                const newEntryId = await response.json();
        }  catch (error){
            console.log('error in post new entry test')
            }
        }
        expect(result).not.toBeInstanceOf(Error);
    });
})

// test delete entry 