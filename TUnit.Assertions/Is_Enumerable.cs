﻿using TUnit.Assertions.AssertConditions;
using TUnit.Assertions.AssertConditions.Collections;

namespace TUnit.Assertions;

public static partial class Is
{
    public static AssertCondition<IEnumerable<T>, IEnumerable<T>> EquivalentTo<T>(IEnumerable<T> expected)
    {
        return new EnumerableEquivalentToAssertCondition<T>(expected);
    }
}