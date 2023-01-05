import request from "@/request";

type dictionaryData = {
    id?: string,
    name?: string
}
export async function getDataDictionaryData (categoryId: string):Promise<Array<dictionaryData>> {
    let {
        code,
        data
    } = await request<Array<dictionaryData>>({
        url: '/base/dataDictionary/pageInfoByCategoryId',
		method: 'GET',
		data: {
			categoryId
		}
    })
    if (!code) {
		return data;
	} else {
		return [];
	}
}

export function formatDate (date: string, needTime: boolean = true, needSecond: boolean = true): string | undefined {
    if (!date) {
        return;
    } else {
        let dateStr = new Date(date);
        let str1 = dateStr.getFullYear();
        let str2 =
			dateStr.getMonth() + 1 > 9 ?
			(dateStr.getMonth() + 1).toString() :
			"0" + (dateStr.getMonth() + 1);
		let str3 =
			dateStr.getDate() > 9 ?
			dateStr.getDate().toString() :
			"0" + dateStr.getDate();
		let str4 =
			dateStr.getHours() < 10 ? "0" + dateStr.getHours() : dateStr.getHours();
		let str5 =
			dateStr.getMinutes() < 10 ?
			"0" + dateStr.getMinutes() :
			dateStr.getMinutes();
		let str6 =
			dateStr.getSeconds() < 10 ?
			"0" + dateStr.getSeconds() :
			dateStr.getSeconds();
		let strTime = needTime ? " " + str4 + ":" + str5 : "";
		let strSecond = needSecond ? ":" + str6 : "";
		return str1 + "-" + str2 + "-" + str3 + strTime + strSecond;
    }
}

export function deepCopyObject <T extends Array<T> | any>(sourceData: T): T {
    if (Array.isArray(sourceData)) {
        return sourceData.map(item => deepCopyObject(item)) as T;
    }
    const obj: T = {} as T;
    for(let key in sourceData) {
        if ((typeof sourceData[key] === 'object') && sourceData[key] !== null) {
            obj[key] = deepCopyObject(sourceData[key]);
        } else {
            obj[key] = sourceData[key];
        }
    }
    return obj;
}