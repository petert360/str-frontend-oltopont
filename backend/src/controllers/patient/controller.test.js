const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const controller = require('./controller');
const service = require('./service');

jest.mock('./service');

describe("petient controller", () => {
    const mockData = [{
        "id": 1,
        "name": "Name1",
        "appointment": "2020-01-01",
        "personalId": "1",
        "dob": "2000-01-01",
        "phone": "1",
        "email": "email1",
        "vaccine": "Vaccine1",
        "vaccination": "Vaccination",
        "active": "true"
    }, {
        "id": 2,
        "name": "Name2",
        "appointment": "2020-01-02",
        "personalId": "2",
        "dob": "2000-01-02",
        "phone": "2",
        "email": "email2",
        "vaccine": "Vaccine2",
        "vaccination": "Vaccination",
        "active": "true"
    }, {
        "id": 3,
        "name": "Name3",
        "appointment": "2020-01-03",
        "personalId": "3",
        "dob": "2000-01-03",
        "phone": "3",
        "email": "email3",
        "vaccine": "Vaccine3",
        "vaccination": "Vaccination",
        "active": "true"
    }, {
        "id": 4,
        "name": "Name4",
        "appointment": "2020-01-04",
        "personalId": "4",
        "dob": "2000-01-04",
        "phone": "4",
        "email": "email4",
        "vaccine": "Vaccine4",
        "vaccination": "Vaccination",
        "active": "true"
    }, {
        "id": 5,
        "name": "Name5",
        "appointment": "2020-01-05",
        "personalId": "5",
        "dob": "2000-01-05",
        "phone": "5",
        "email": "email5",
        "vaccine": "Vaccine5",
        "vaccination": "Vaccination",
        "active": "true"
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        service.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const ID = 1;

        const request = mockRequest({
            params: {
                id: ID
            }
        });

        return controller.findOne(request, response, nextFunction)
            .then( () => {
                expect(service.findOne).toBeCalledWith(ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === ID)
                );                
            })
    });
});