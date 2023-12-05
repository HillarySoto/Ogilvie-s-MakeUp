// Generated by Selenium IDE
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Remote;
using OpenQA.Selenium.Support.UI;
using OpenQA.Selenium.Interactions;
using NUnit.Framework;
[TestFixture]
public class AdminVerPedidoTest {
  private IWebDriver driver;
  public IDictionary<string, object> vars {get; private set;}
  private IJavaScriptExecutor js;
  [SetUp]
  public void SetUp() {
    driver = new ChromeDriver();
    js = (IJavaScriptExecutor)driver;
    vars = new Dictionary<string, object>();
  }
  [TearDown]
  protected void TearDown() {
    driver.Quit();
  }
  [Test]
  public void adminVerPedido() {
    driver.Navigate().GoToUrl("http://localhost:44411/");
    driver.Manage().Window.Size = new System.Drawing.Size(1050, 700);
    driver.FindElement(By.Name("email")).SendKeys("juan@example.com");
    driver.FindElement(By.Name("password")).SendKeys("jk123");
    driver.FindElement(By.CssSelector(".login-body")).Click();
    driver.FindElement(By.CssSelector(".login-submit")).Click();
    driver.FindElement(By.CssSelector(".nav-item:nth-child(7) span")).Click();
    driver.FindElement(By.LinkText("Administrar Pedidos")).Click();
  }
}
