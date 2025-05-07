import { useQuery } from "@tanstack/react-query";
import { ApiData } from "../types/types";
import { dataService } from "../service/data.service";

export const UseGetData = () => {
	console.log("Query is happening");

	useQuery<ApiData, Error>({
		queryKey: ["data"],
		queryFn: dataService.getData,
	});
};
