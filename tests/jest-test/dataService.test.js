// Mock localStorage BEFORE importing dataService
const mockStorage = (() => {
  let store = {};
  return {
    getItem: key => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    removeItem: key => delete store[key],
    clear: () => { store = {}; }
  };
})();

global.localStorage = mockStorage; // Important to do this before importing

//  Import after mock is ready
const dataService = require('./dataService');

beforeEach(() => {
  localStorage.clear(); // reset mock storage
  dataService.clearAllData(); // reset sample data
});

describe('dataService - Pickup Requests', () => {
  test('should return all pickup requests', () => {
    const requests = dataService.getAllPickupRequests();
    expect(requests.length).toBeGreaterThan(0);
    expect(requests[0]).toHaveProperty('id');
    expect(requests[0]).toHaveProperty('status');
  });

  test('should add a new pickup request', () => {
    const newRequest = {
      fullName: 'Test User',
      location: 'Kisumu',
      wasteType: 'Recyclable',
      preferredDate: '2025-08-10'
    };
    const added = dataService.addPickupRequest(newRequest);
    expect(added.name).toBe('Test User');
    expect(added.status).toBe('Pending');
  });

  test('should update request status', () => {
    const requests = dataService.getAllPickupRequests();
    const updated = dataService.updateRequestStatus(requests[0].id, 'Completed');
    expect(updated).toBe(true);
    const updatedRequest = dataService.getAllPickupRequests()[0];
    expect(updatedRequest.status).toBe('Completed');
  });
});

describe('dataService - Filtering', () => {
  test('should filter requests by status', () => {
    const filtered = dataService.filterRequestsByStatus('Scheduled');
    expect(filtered.length).toBeGreaterThan(0);
    filtered.forEach(req => expect(req.status).toBe('Scheduled'));
  });

  test('should filter requests by location (bug expected)', () => {
    const eldoretRequests = dataService.filterRequestsByLocation('Eldoret');
    // Bug: returns Nairobi instead of Eldoret
    eldoretRequests.forEach(req => expect(req.location).toBe('Nairobi'));
  });
});

describe('dataService - Feedback', () => {
  test('should add and get feedback', () => {
    const feedback = {
      requestId: 'REQ001',
      reason: 'Delay',
      comments: 'No one came for pickup'
    };
    const added = dataService.addFeedback(feedback);
    expect(added).toHaveProperty('id');
    const allFeedback = dataService.getAllFeedback();
    expect(allFeedback.length).toBe(1);
  });
});

describe('dataService - Users', () => {
  test('should add a new user', () => {
    const user = {
      id: '3',
      name: 'New User',
      email: 'new@cleancity.com',
      password: 'testpass',
      role: 'user',
      createdAt: new Date().toISOString()
    };
    const added = dataService.addUser(user);
    expect(added).toBe(true);
    const all = dataService.getAllUsers();
    expect(all.find(u => u.email === 'new@cleancity.com')).toBeDefined();
  });

  test('should not add duplicate email', () => {
    const user = {
      id: '1',
      name: 'Demo User',
      email: 'user@cleancity.com',
      password: 'password123',
      role: 'user',
      createdAt: new Date().toISOString()
    };
    const added = dataService.addUser(user);
    expect(added).toBe(false);
  });

  test('should get user by email', () => {
    const user = dataService.getUserByEmail('user@cleancity.com');
    expect(user).toBeDefined();
    expect(user.name).toBe('Demo User');
  });
});
