'use client'
import { useState, useEffect } from "react"
import { editOrganizationStatus } from "@/actions/organization";
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge as RadixUiBadge } from "@radix-ui/themes";





const statusBadge = {
  inactive: "red",
  active: "green"
};
export function OrgStatusSwitch({status, orgId }) {
  const [isActive, setIsActive] = useState(status=== "active");
  const [loading, setLoading] = useState(false);



  const handleToggle = async () => {
    const newStatus = isActive ? "inactive" : "active";
    const response = await editOrganizationStatus(orgId, newStatus);
    if (response.success) {
      setIsActive(!isActive);
    }
}

  return (
    <div className="flex items-center space-x-2">
      <Switch id="org-status-toggle" checked={isActive} onCheckedChange={handleToggle}/>
      <Label htmlFor="org-status-toggle">
        <RadixUiBadge color={statusBadge[isActive ? "active" : "inactive"]}>
          {loading ? "Updating..." : isActive ? "Active" : "Inactive"}
        </RadixUiBadge>
      </Label>
    </div>
  )
}
