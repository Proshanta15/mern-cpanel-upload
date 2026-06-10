import React, { useEffect } from 'react'
import { useAuth } from '../store/auth';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminUpdate = () => {

    const [data, setData] = React.useState({
        username: "",
        email: "",
        phone: ""
    })

     const { authorizationToken } = useAuth();
     const params = useParams();
      const navigate = useNavigate();

    const getSingleUserData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                }
            })

            const data = await response.json();

            if (!response.ok) {
                console.log("Fetch failed:", data?.message || "Unable to fetch user data");
                return;
            }

            console.log("User data fetched:", data);
            setData(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSingleUserData();
    }, [])

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`, 
              {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken,
                },
                body: JSON.stringify(data),
            })
            if (response.ok) {
                 toast.success("User updated successfully")
                 navigate("/admin/users");
            }else {
                toast.error(res_data?.message || "Failed to update user");
            }
         
        } catch (error) {
          console.log(error);
        }
    }

  return (
     <main className="contact-page">
      <section className="contact-card">
        <div className="contact-copy">
          <p className="contact-tag">Update User</p>
          <h1>Edit User Details</h1>
          <p>
            Modify the user information below and submit the changes.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleUpdate}>
          <div className="contact-field">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              autoComplete="off"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
          </div>

          <div className="contact-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="off"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>

          <div className="contact-field">
            <label htmlFor="phone">Phone</label>
             <input
              id="phone"
              name="phone"
              type="text"
              placeholder="Enter your phone number"
              autoComplete="off"
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            />
          </div>

          <button type="submit" className="contact-button">
            Update
          </button>
        </form>
      </section>
    </main>
  )
}

export default AdminUpdate
