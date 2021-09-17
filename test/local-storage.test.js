import { getUser, setUser, findById } from '../utils.js';

const test = QUnit.test;


test('should take an array and stringify it into local storage', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const testedArray = [1, 2, 3, 4];
    const expected = localStorage.setItem('USER', testedArray);
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = setUser(testedArray);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('should grab an stringy item out of localstorage and then parse ', (expect) => {
    // Set up your arguments and expectations
    const sendingtoStorage = [1, 2, 3, 4];
    const stringyUser = JSON.stringify(sendingtoStorage);
    localStorage.setItem('USER', stringyUser);
    //Act 
    
    // Call the function you're testing and set the result to a const
    const actual = getUser();
    //Expect
    const expected = [1, 2, 3, 4];
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
test('takes in an array and an id and returns the item in the arrray with the same id', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = { id: 1,
        quantity: '4' };
    const myArray = [{ id: 0,
        quantity: '3'
    },
    { id: 1,
        quantity: '4'
    },
    { id: 2,
        quantity: '4'
    }];
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(myArray, 1);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
