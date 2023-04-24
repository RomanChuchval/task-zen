import {PriorityTypes} from "../redux/reducers/filter-reducer";

type ParamsType = {
    isDone: boolean;
    priority: PriorityTypes
}

export const filterData = <D extends ParamsType>(filteringEntity: Array<D>,
                                    priorityFilters: PriorityTypes[],
                                    statusFilter: boolean | null): D[] => {
    let filteredData = filteringEntity
    if(!priorityFilters.length && statusFilter === null) {
        return filteredData
    } else {
        if (statusFilter === null) {
            filteredData = filteringEntity.filter(tl => priorityFilters.includes(tl.priority))
        } else if (!priorityFilters.length) {
            filteredData = filteringEntity.filter(el => el.isDone === statusFilter)
        }
        else {
            let filteredForPriority: Array<D> = filteringEntity
                .filter(tl => priorityFilters.includes(tl.priority))
            filteredData = filteredForPriority.filter(el => el.isDone === statusFilter)
        }
    }
    return filteredData
}