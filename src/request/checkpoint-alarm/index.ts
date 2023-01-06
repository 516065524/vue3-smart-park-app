import request from "@/request";
import { checkPoint } from "../interface";

export function dataPermission() {
	return request<Array<checkPoint.permissionDataItem>>({
		url: "/base/PermOrg/dataPermission",
		method: "GET"
	})
}

