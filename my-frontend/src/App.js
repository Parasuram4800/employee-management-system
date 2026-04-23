import React, { useEffect, useState } from 'react';

function App() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const fetchEmployees = () => {
    fetch('http://localhost:8080/api/v1/employees')
      .then(res => res.json())
      .then(data => setEmployees(data))
      .catch(err => console.error("Error fetching data:", err));
  };

  useEffect(() => {
    fetchEmployees();
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = { name, role };

    fetch('http://localhost:8080/api/v1/employees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEmployee)
    })
    .then(() => {
      fetchEmployees(); 
      setName('');      
      setRole('');
    })
    .catch(err => console.error("Error adding:", err));
  };

  const deleteEmployee = (id) => {
    fetch(`http://localhost:8080/api/v1/employees/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      fetchEmployees(); // Refresh list after deletion
    })
    .catch(err => console.error("Error deleting:", err));
  };

  return (
    <div style={{ padding: '40px', maxWidth: '1000px', margin: 'auto', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '30px' }}>Employee Management Dashboard</h2>
      
      {/* ADD SECTION */}
      <div style={{ background: '#f4f7f6', padding: '25px', borderRadius: '10px', marginBottom: '30px', border: '1px solid #e0e0e0' }}>
        <h4 style={{ marginTop: '0', color: '#34495e' }}>Register New Employee</h4>
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '15px' }}>
          <input 
            type="text" 
            placeholder="Full Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            style={{ padding: '12px', flex: '2', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <input 
            type="text" 
            placeholder="Designation / Role" 
            value={role} 
            onChange={(e) => setRole(e.target.value)} 
            required 
            style={{ padding: '12px', flex: '2', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <button 
            type="submit" 
            style={{ padding: '12px 25px', background: '#27ae60', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Add Employee
          </button>
        </form>
      </div>

      {/* TABLE SECTION */}
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', overflow: 'hidden', borderRadius: '10px', boxShadow: '0 0 20px rgba(0,0,0,0.1)' }}>
        <thead>
          <tr style={{ backgroundColor: '#2c3e50', color: 'white', textAlign: 'left' }}>
            <th style={{ padding: '18px' }}>Emp ID</th>
            <th style={{ padding: '18px' }}>Full Name</th>
            <th style={{ padding: '18px' }}>Role</th>
            <th style={{ padding: '18px', textAlign: 'center' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '15px' }}>{emp.id}</td>
              <td style={{ padding: '15px' }}>{emp.name}</td>
              <td style={{ padding: '15px' }}>{emp.role}</td>
              <td style={{ padding: '15px', textAlign: 'center' }}>
                <button 
                  onClick={() => deleteEmployee(emp.id)} 
                  style={{ padding: '8px 16px', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '14px' }}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {employees.length === 0 && <p style={{textAlign: 'center', marginTop: '30px', color: '#95a5a6'}}>No records found in the database.</p>}
    </div>
  );
}

export default App;