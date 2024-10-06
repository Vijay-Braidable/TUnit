using TUnit.Engine.SourceGenerator.CodeGenerators;

namespace TUnit.Engine.SourceGenerator.Tests;

internal class NumberArgumentTests : TestsBase<TestsGenerator>
{
    [Test]
    public Task Test() => RunTest(Path.Combine(Git.RootDirectory.FullName,
            "TUnit.TestProject",
            "NumberArgumentTests.cs"),
        generatedFiles =>
        {
            Assert.That(generatedFiles.Length, Is.EqualTo(6));
            
            AssertFileContains(generatedFiles[0], "global::System.Int32 methodArg = 1;");
            AssertFileContains(generatedFiles[1], "global::System.Double methodArg = 1.1;");
            AssertFileContains(generatedFiles[2], "global::System.Single methodArg = 1.1f;");
            AssertFileContains(generatedFiles[3], "global::System.Int64 methodArg = 1L;");
            AssertFileContains(generatedFiles[4], "global::System.UInt64 methodArg = 1UL;");
            AssertFileContains(generatedFiles[5], "global::System.UInt32 methodArg = 1U;");
        });

    [Test]
    [SetCulture("de-DE")]
    public Task TestDE() => Test();
}