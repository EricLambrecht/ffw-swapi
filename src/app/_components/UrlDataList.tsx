import React, { Suspense } from "react";
import { NamedList, NamedListProps } from "@/app/_components/NamedList";
import { getItemByUrl } from "@/src/swapi/getItemByUrl";
import { ItemWithUrl } from "@/src/swapi/types";

type RenderFunction<T> = (item: T) => React.ReactNode;

interface Props<T extends ItemWithUrl> extends NamedListProps {
  urlList: string[]
  render: RenderFunction<T>
}

interface ItemProps<T extends ItemWithUrl> {
  url: string
  render: RenderFunction<T>
}

async function ListItem<T extends ItemWithUrl>({ url, render }: ItemProps<T>){
  const item = await getItemByUrl<T>(url)
  return <li>{render(item)}</li>;
}

/**
 * This component renders a list of urls (as it is often present in SWAPI responses)
 * and renders it into a human-readable list by fetching all of these url's data and
 * rendering list items based on the provided render function.
 *
 * The list items are fetched separately/asynchronously to speed up loading times.
 *
 * @param urlList An array of urls from swapi
 * @param render A function that receives the resolved url item and returns a React node
 * @param title Title of the list
 * @constructor
 */
export function UrlDataList<T extends ItemWithUrl>({ urlList, render, title }: Props<T>) {
  return (
    <NamedList title={title}>
      {urlList.length > 0 ? urlList.map(url => (
        <Suspense key={url} fallback={<li>…</li>}>
          <ListItem url={url} render={render} />
        </Suspense>
      )) : <p>[None]</p>}
    </NamedList>
  )
}