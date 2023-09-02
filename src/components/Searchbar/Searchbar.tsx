import React, { useState } from 'react';
import { FilterIcon } from '../../svg/FilterIcon';
import { PlusIcon } from '../../svg/PlusIcon';
import { SearchIcon } from '../../svg/SearchIcon';
import { c } from '../../utils/classnameUtills';
import './Searchbar.sass';

export const Searchbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  return (
    <div className="searchbar">
      <div className={c('searchbar_searchcontainer', { ['searchbar_searchcontainer__active']: isSearchOpen })}
           onClick={() => setIsSearchOpen(true)}>

        <div className={c('searchbar_button', { ['searchbar_button__active']: isSearchOpen })}>
          <SearchIcon className="searchbar_searchicon" />
        </div>

        {isSearchOpen && <input
          id="searchInput"
          onChange={event => setSearchInput(event.target.value)}
          value={searchInput}
          className="searchbar_input"
          autoFocus
          onBlur={() => setIsSearchOpen(false)}
        />}
      </div>

      <div className="searchbar_actions">
        <div className={c('searchbar_button', { ['searchbar_button__closed']: isSearchOpen })}>
          <FilterIcon className="searchbar_filtericon" />
        </div>

        <div className="searchbar_button">
          <PlusIcon className={c('searchbar_plusicon', { ['searchbar_plusicon__rotate']: isSearchOpen })} />
        </div>
      </div>
    </div>
  );
};
