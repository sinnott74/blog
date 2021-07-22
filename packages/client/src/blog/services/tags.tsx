import React, { useContext, createContext, FC } from "react";
import { useLocation, useHistory } from "react-router-dom";

interface TagsContextProps {
    tags: string[];
    add: (tag: string) => void;
    remove: (tag: string) => void;
}

const TagsContext = createContext<TagsContextProps>({ tags: [], add: () => {}, remove: () => {} });

export const TagsContainer: FC = ({ children }) => {
    const location = useLocation();
    const history = useHistory();
    const searchParams = new URLSearchParams(location.search);
    const tags = searchParams.getAll("tags") || [];

    const add = (tag: string) => {
        if (tags.includes(tag)) {
            return;
        }
        searchParams.append("tags", tag);
        location.search = searchParams.toString();
        history.push(location);
    };

    const remove = (tag: string) => {
        if (!tags.includes(tag)) {
            return;
        }
        searchParams.delete("tags");
        const updatedTags = tags.filter((t) => t !== tag);
        updatedTags.forEach((t) => searchParams.append("tags", t));
        location.search = searchParams.toString();
        history.push(location);
    };

    return <TagsContext.Provider value={{ tags, add, remove }}>{children}</TagsContext.Provider>;
};

export const useTags = () => useContext(TagsContext);
