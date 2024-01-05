const fs = require('fs');
const path = require('path');
const Info = require('../server/models/entryModel');
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

// test create, get, delete entry

describe('db entries', () => {
    it('posts a new entry to the db', async () => {
        const result = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/entry', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(testEntry),
                })
            newEntryId = await response.json()
        } catch (error){
            console.log('error in post new entry test')
            }
        }
        await result();
        expect(result).not.toBeInstanceOf(Error);
        expect(newEntryId).toHaveLength(24);
    });
    it('retrieves the new entry from the db', async () => {
        const result = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/homepage/bloodsugar');
                resData = await response.json();
            } catch (error) {
                console.log('error in get new entry test')
            }
        }
        await result();
        newEntry = resData.filter(el => el._id === newEntryId);
        expect(result).not.toBeInstanceOf(Error);
        expect(newEntry).toHaveLength(1); 
    });
    it('deletes the new entry from the db', async () => {
        const result = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/delete/${newEntryId}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type':'application/json'
                    }
                })
                resData = response.json()
            } catch (error) {
                console.log('error in delete entry test')
            }
        }
        await result();
        const lookup = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/homepage/bloodsugar');
                resData = await response.json();
            } catch (error) {
                console.log('error in get new entry test')
            }
        }
        await lookup();
        newEntry = resData.filter(el => el._id === newEntryId);
        expect(newEntry).toHaveLength(0);
    })
})

