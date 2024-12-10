import React from 'react';
import FilterButton from './components/FilterButton';

function App() {
  const scopes = [
    {
      key: 'spark:all',
      name: 'spark:all',
      description: 'Full access to your users\' Cisco Spark account'
    },
    {
      key: 'spark:people_read',
      name: 'spark:people_read',
      description: 'Read your users\' company directory'
    },
    {
      key: 'spark:rooms_read',
      name: 'spark:rooms_read',
      description: 'List the titles of rooms that your user\'s are in'
    },
    {
      key: 'spark:rooms_write',
      name: 'spark:rooms_write',
      description: 'Manage rooms on your users\' behalf'
    },
    {
      key: 'spark:memberships_read',
      name: 'spark:memberships_read',
      description: 'List people in the rooms your user\'s are in'
    },
    {
      key: 'spark:memberships_write',
      name: 'spark:memberships_write',
      description: 'Invite people to rooms on your users\' behalf'
    },
    {
      key: 'spark:messages_read',
      name: 'spark:messages_read',
      description: 'Read the content of rooms that your user\'s are in'
    },
    {
      key: 'spark:messages_write',
      name: 'spark:messages_write',
      description: 'Post and delete messages on your users\' behalf'
    },
    {
      key: 'spark:teams_read',
      name: 'spark:teams_read',
      description: 'List the teams your users are in'
    },
    {
      key: 'spark:teams_write',
      name: 'spark:teams_write',
      description: 'Create teams on your users\' behalf'
    },
    {
      key: 'spark:team_memberships_read',
      name: 'spark:team_memberships_read',
      description: 'List the people in the teams your user\'s belong to'
    },
    {
      key: 'spark:team_memberships_write',
      name: 'spark:team_memberships_write',
      description: 'Add people to teams on your users\' behalf'
    },
    {
      key: 'spark-admin:people_read',
      name: 'spark-admin:people_read',
      description: 'Access to read your user\'s company directory'
    },
    {
      key: 'spark-admin:people_write',
      name: 'spark-admin:people_write',
      description: 'Access to write to your user\'s company directory'
    },
    {
      key: 'spark-admin:organizations_read',
      name: 'spark-admin:organizations_read',
      description: 'Access to read your user\'s organizations'
    },
    {
      key: 'spark-admin:roles_read',
      name: 'spark-admin:roles_read',
      description: 'Access to read roles available in your user\'s organization'
    },
    {
      key: 'spark-admin:licenses_read',
      name: 'spark-admin:licenses_read',
      description: 'Access to read licenses available in your user\'s organizations'
    }
  ];

  return (
    <div>
      <h1>Select Scopes:</h1>
      <FilterButton scopes={scopes} />
    </div>
  );
}

export default App;
