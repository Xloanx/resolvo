"use server";
import { createAdmin } from "@/server-utils/db-interact";
import { redirect } from "next/navigation"

export async function addAdmin(prevState, formData) {
    
    //get values
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const role = "admin";;
    
    //validate
    const errors = {};
    
    if (!name) {
        errors.name = "Name is required";
    }
    if (!email) {
        errors.email = "Email is required";
    }
    if (!phone) {
        errors.phone = "Phone number is required";
    }
    
    
    if (Object.keys(errors).length > 0) {
        return errors;
    }
    
    //if validation passes, create organization
    const res = await createAdmin(name, email, phone, role);
    redirect(`/orgs/new`)
    return res ? { success: true } : { success: false };
}