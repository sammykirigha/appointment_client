import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

interface IDropDown {
  activator: any;
  items: any;
  width: any;
  scrollHeight?: any;
}

const Dropdown = ({
  activator: Activator,
  items = [],
  width,
  scrollHeight = "auto",
}: IDropDown) => {
  return (
    <Menu as="div" className="relative inline-block text-left z-10">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-opacity-20 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <Activator />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`absolute right-0 mt-2 w-[${width}px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          <div className={`slim-scrollbar overflow-auto h-[${scrollHeight}px]`}>
            {items.map((Item: any, index: any) => (
              <Item key={index} />
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
