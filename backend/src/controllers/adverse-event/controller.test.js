const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const controller = require('./controller');
const service = require('./service');

jest.mock('./service');

describe("adverse-event controller", () => {
    const mockData = [{
        "id": 1,
        "patient": "Patient1",
        "date": "2000-01-01",
        "description": "Description1",
    }, {
        "id": 2,
        "patient": "Patient2",
        "date": "2000-01-02",
        "description": "Description2",
    }, {
        "id": 3,
        "patient": "Patient3",
        "date": "2000-01-03",
        "description": "Description3",
    }, {
        "id": 4,
        "patient": "Patient4",
        "date": "2000-01-04",
        "description": "Description4",
    }, {
        "id": 5,
        "patient": "Patient5",
        "date": "2000-01-05",
        "description": "Description5",
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