import * as React from 'react';
import { storiesOf, action, module } from '@kadira/storybook';

import { Code } from './code';

storiesOf('Code', module)
    .add('empty', () => {
        return <Code />
    })
    .add('language - c#', () => {
        return <div>
            <Code language="cs">{csharp}</Code>
            <Code language="cs">{ex}</Code>
        </div>
    })
    .add('language - js', () => {
        return <Code>{js}</Code>
    })

const js = `const woah = fun => fun + 1;
const dude = woah(2) + 3;
function thisIsAFunction() {
  return [1,2,3].map(n => n + 1).filter(n !== 3);
}
console.log('making up fake code is really hard');

function itIs() {
  return 'no seriously really it is';
}`;

const csharp = `/// <summary>
/// Constructs a Url object from a string.
/// </summary>
/// <param name="baseUrl">The URL to use as a starting point (required)</param>
/// <exception cref="ArgumentNullException"><paramref name="baseUrl"/> is <see langword="null" />.</exception>
public Url(string baseUrl) {
    if (baseUrl == null)
        throw new ArgumentNullException(nameof(baseUrl));

    var parts = baseUrl.SplitOnFirstOccurence('#');
    Fragment = (parts.Length == 2) ? parts[1] : "";
    parts = parts[0].SplitOnFirstOccurence('?');
    Query = (parts.Length == 2) ? parts[1] : "";
    Pyath = parts[0];
}`;

const ex = `FATAL Transaction not connected, or was disconnected NHibernate.TransactionException: Transaction not connected, or was disconnected
at NHibernate.Transaction.AdoTransaction.CheckNotZombied()
at NHibernate.Transaction.AdoTransaction.Commit()
at DLSS.DirectToPatient.CommandQuery.Implementation.MutableQuerySession.Dispose() in E:\\7\\DLSS.DirectToPatient\\eMPoweRx Dev CI w Octo Release\\src\\code\\CommandQuery.Implementation\\MutableQuerySession.cs:line 59
at DLSS.DirectToPatient.CommandQuery.Implementation.AbstractExecuteMutableQuery\`2.Execute(TQuery query) in E:\\7\\DLSS.DirectToPatient\\eMPoweRx Dev CI w Octo Release\\src\\code\\CommandQuery.Implementation\\AbstractExecuteMutableQuery.cs:line 32 at NHibernate.Transaction.AdoTransaction.CheckNotZombied()
at NHibernate.Transaction.AdoTransaction.Commit()
at DLSS.DirectToPatient.CommandQuery.Implementation.MutableQuerySession.Dispose() in E:\\7\\DLSS.DirectToPatient\\eMPoweRx Dev CI w Octo Release\\src\\code\\CommandQuery.Implementation\\MutableQuerySession.cs:line 59
at DLSS.DirectToPatient.CommandQuery.Implementation.AbstractExecuteMutableQuery\`2.Execute(TQuery query) in E:\\7\\DLSS.DirectToPatient\\eMPoweRx Dev CI w Octo Release\\src\\code\\CommandQuery.Implementation\\AbstractExecuteMutableQuery.cs:line 32`;