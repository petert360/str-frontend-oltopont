const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const controller = require('./controller');
const service = require('./service');

jest.mock('./service');

describe("person controller", () => {
    const mockData = [{
        "id": 1,
        "hospital": "Hospital1",
        "address": "Address1",
        "building": "Building1",
    }, {
        "id": 2,
        "hospital": "Hospital2",
        "address": "Address2",
        "building": "Building2",
    }, {
        "id": 3,
        "hospital": "Hospital3",
        "address": "Address3",
        "building": "Building3",
    }, {
        "id": 4,
        "hospital": "Hospital4",
        "address": "Address4",
        "building": "Building4",
    }, {
        "id": 5,
        "hospital": "Hospital5",
        "address": "Address5",
        "building": "Building5",
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