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
public class CrearPedidoTest {
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
  public void crearPedido() {
    driver.Navigate().GoToUrl("http://localhost:44411/");
    driver.Manage().Window.Size = new System.Drawing.Size(761, 718);
    driver.FindElement(By.Name("email")).SendKeys("maria@example.com");
    driver.FindElement(By.Name("password")).SendKeys("mb90");
    driver.FindElement(By.CssSelector(".login-submit")).Click();
    driver.FindElement(By.CssSelector(".nav-item:nth-child(5) .fas")).Click();
    driver.FindElement(By.LinkText("Ver carrito")).Click();
    driver.FindElement(By.CssSelector(".btn:nth-child(3)")).Click();
    driver.FindElement(By.CssSelector(".nav-item:nth-child(4) .fas")).Click();
    driver.FindElement(By.LinkText("Administrar Pedidos")).Click();
    driver.FindElement(By.CssSelector(".nav-item:nth-child(5) .fas")).Click();
    driver.FindElement(By.CssSelector("tr:nth-child(1) .btn-secondary")).Click();
    driver.FindElement(By.CssSelector(".nav-item:nth-child(5) .fas")).Click();
    driver.FindElement(By.LinkText("Ver carrito")).Click();
    driver.FindElement(By.CssSelector(".btn:nth-child(2)")).Click();
    driver.FindElement(By.Name("idProducto")).Click();
    {
      var dropdown = driver.FindElement(By.Name("idProducto"));
      dropdown.FindElement(By.XPath("//option[. = 'Lápiz Labial Rojo Intenso']")).Click();
    }
    driver.FindElement(By.Name("cantidad")).Click();
    driver.FindElement(By.Name("cantidad")).SendKeys("1");
    driver.FindElement(By.CssSelector(".btn-primary")).Click();
  }
}
