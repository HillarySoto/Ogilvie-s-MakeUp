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
public class EditarInventarioTest {
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
  public void editarInventario() {
    driver.Navigate().GoToUrl("http://localhost:44411/");
    driver.Manage().Window.Size = new System.Drawing.Size(1050, 700);
    driver.FindElement(By.Name("email")).SendKeys("juan@example.com");
    driver.FindElement(By.Name("password")).SendKeys("jk123");
    driver.FindElement(By.CssSelector(".login-submit")).Click();
    driver.FindElement(By.CssSelector(".nav-item:nth-child(4) span")).Click();
    driver.FindElement(By.LinkText("Administrar Inventario")).Click();
    driver.FindElement(By.CssSelector(".nav-item:nth-child(4) span")).Click();
    driver.FindElement(By.CssSelector(".table-warning:nth-child(3) .me-2")).Click();
    driver.FindElement(By.CssSelector(".modal-body")).Click();
    driver.FindElement(By.Name("cantidad")).SendKeys("20");
    driver.FindElement(By.Name("estado")).Click();
    {
      var dropdown = driver.FindElement(By.Name("estado"));
      dropdown.FindElement(By.XPath("//option[. = 'En existencia']")).Click();
    }
    driver.FindElement(By.Name("estado")).Click();
    driver.FindElement(By.CssSelector(".modal-body")).Click();
    driver.FindElement(By.Name("estado")).Click();
    {
      var dropdown = driver.FindElement(By.Name("estado"));
      dropdown.FindElement(By.XPath("//option[. = 'En existencia']")).Click();
    }
    driver.FindElement(By.CssSelector(".btn-primary")).Click();
    driver.FindElement(By.CssSelector(".swal2-confirm")).Click();
    driver.FindElement(By.CssSelector(".nav-item:nth-child(7) span")).Click();
    driver.FindElement(By.LinkText("Administrar Pedidos")).Click();
    driver.FindElement(By.CssSelector(".nav-item:nth-child(7) span")).Click();
    driver.FindElement(By.CssSelector(".nav-item:nth-child(4) span")).Click();
    driver.FindElement(By.LinkText("Administrar Inventario")).Click();
    driver.FindElement(By.CssSelector(".table-warning:nth-child(3) .me-2")).Click();
    driver.FindElement(By.Name("estado")).Click();
    {
      var dropdown = driver.FindElement(By.Name("estado"));
      dropdown.FindElement(By.XPath("//option[. = 'En existencia']")).Click();
    }
    driver.FindElement(By.CssSelector(".btn-primary")).Click();
    driver.FindElement(By.CssSelector(".swal2-confirm")).Click();
    driver.FindElement(By.CssSelector(".nav-item:nth-child(8) span")).Click();
    driver.FindElement(By.LinkText("Ver carrito")).Click();
    driver.FindElement(By.LinkText("Administrar Inventario")).Click();
    driver.FindElement(By.CssSelector(".nav-item:nth-child(8) span")).Click();
  }
}