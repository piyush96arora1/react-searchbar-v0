# react-searchbar-v0

A search bar made with react, given a list it filters the list on text input in the search bar.

To see it in action run:

# npm run storybook

# Props:

list :-> List to use as items to search from.

listId :-> Unique id in list.

listItemName :-> Name of attribute which you will be searching.

onItemClick :-> Function to pass which will get id and name of item on select.

placeholder :-> Search Placeholder.

noOptions :-> Message to appear if no filtered result.

minLength :-> Minimum length afer which search result will activate.

All props have default values.

# To do:

Add loader in search bar mean while list is loaded.
Pass custom styles to search bar.
