

import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";
import "../style/admin-user.css";

export const AdminContacts = () => {
    const [users, setUsers] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const { authorizationToken } = useAuth();

    const getAllUsersData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/contacts", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                }
            })

            const data = await response.json();
            console.log(data);
            setUsers(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllUsersData();
    }, [])

    const filteredUsers = useMemo(() => {
        const value = searchTerm.trim().toLowerCase();
        if (!value) return users;

        return users.filter((user) => {
            return (
                user?.username?.toLowerCase().includes(value) ||
                user?.email?.toLowerCase().includes(value) ||
                user?.phone?.toLowerCase().includes(value)
            );
        });
    }, [users, searchTerm]);

    const totalUsers = users.length;
    const totalResults = filteredUsers.length;
    const uniqueDomains = new Set(
        users.map((user) => (user.email?.split("@")[1] || "").toLowerCase())
    ).size;

    const deleteUser = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                }
            })

            const data = await response.json();

            if (!response.ok) {
                console.log("Delete failed:", data?.message || "Unable to delete user");
                return;
            }

            console.log("Contact deleted:", data);
            getAllUsersData();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className="admin-users-page">
            <div className="admin-users-headline">
                <p className="eyebrow">Control Panel</p>
                <h1>User Management</h1>
                <p className="subtitle">Manage users, review contact details, and quickly find records from one place.</p>
            </div>

            <div className="admin-users-stats">
                <article className="stat-card">
                    <h3>Total Users</h3>
                    <p>{totalUsers}</p>
                </article>
                <article className="stat-card">
                    <h3>Visible Results</h3>
                    <p>{totalResults}</p>
                </article>
                <article className="stat-card">
                    <h3>Email Domains</h3>
                    <p>{uniqueDomains}</p>
                </article>
            </div>

            <div className="admin-users-panel">
                <div className="panel-topbar">
                    <h2>All Registered Users</h2>
                    <input
                        type="text"
                        placeholder="Search by name, email, or phone"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="table-wrap">
                    <table className="admin-user-table">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.length > 0 ? (
                                filteredUsers.map((curUser, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="user-cell">
                                                <span className="avatar">{curUser.username?.charAt(0)?.toUpperCase() || "U"}</span>
                                                <span>{curUser.username}</span>
                                            </td>
                                            <td>{curUser.email}</td>
                                            <td>{curUser.phone}</td>
                                            <td>
                                                <div className="action-group">
                                                    <button onClick={() => deleteUser(curUser._id)} className="btn btn-delete">Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            ) : (
                                <tr>
                                    <td colSpan="4" className="empty-state">No users found for this search.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
